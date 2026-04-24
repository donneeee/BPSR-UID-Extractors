import argparse
import json
import sys
from pathlib import Path


def main():
    cli = argparse.ArgumentParser(description="Export PNGs from extracted UnityFS icon bundles.")
    cli.add_argument("--icons-dir", default="output/icons", help="Icon bundle directory.")
    cli.add_argument("--dry-run", action="store_true", help="Report without writing PNGs.")
    args = cli.parse_args()

    root = Path(__file__).resolve().parent
    deps = root / ".pydeps"
    if deps.is_dir():
      sys.path.insert(0, str(deps))

    try:
      import UnityPy
    except ModuleNotFoundError as error:
      raise SystemExit(
        "Missing UnityPy. Install local decoder deps with:\n"
        "  python -m pip install --target .\\.pydeps UnityPy Pillow texture2ddecoder"
      ) from error

    icons_dir = (root / args.icons_dir).resolve() if not Path(args.icons_dir).is_absolute() else Path(args.icons_dir)
    manifest_path = icons_dir / "IconManifest.json"
    if not manifest_path.is_file():
      raise SystemExit(f"Missing icon manifest: {manifest_path}")

    manifest = json.loads(manifest_path.read_text(encoding="utf8"))
    exported = []
    failed = []

    for group in manifest.get("JsonManifests", []):
      group_manifest_path = icons_dir / group["Manifest"]
      if not group_manifest_path.is_file():
        failed.append({"Manifest": str(group_manifest_path), "Error": "Missing manifest"})
        continue

      group_manifest = json.loads(group_manifest_path.read_text(encoding="utf8"))
      changed = False
      for asset in group_manifest.get("Assets", []):
        bundle_path = icons_dir / asset["OutputFile"]
        png_path = bundle_path.with_suffix(".png")
        try:
          images = read_texture_images(UnityPy, bundle_path)
          if not images:
            failed.append({**minimal_asset(asset), "Error": "No Texture2D image found"})
            continue
          image = images[0]
          if not args.dry_run:
            png_path.parent.mkdir(parents=True, exist_ok=True)
            image.save(png_path)
          asset["PngFile"] = str(png_path.relative_to(icons_dir))
          asset["PngWidth"] = image.width
          asset["PngHeight"] = image.height
          asset["PngMode"] = image.mode
          exported.append(asset)
          changed = True
        except Exception as error:
          failed.append({**minimal_asset(asset), "Error": str(error)})

      group_manifest["PngExportedAt"] = current_timestamp()
      group_manifest["PngAssetCount"] = sum(1 for asset in group_manifest.get("Assets", []) if asset.get("PngFile"))
      group_manifest["PngFailedCount"] = len([item for item in failed if item.get("SourceJson") == group_manifest.get("SourceJson")])
      if changed and not args.dry_run:
        group_manifest_path.write_text(json.dumps(group_manifest, indent=2) + "\n", encoding="utf8")

    manifest["PngExportedAt"] = current_timestamp()
    manifest["PngAssetCount"] = len(exported)
    manifest["PngFailedCount"] = len(failed)
    manifest["PngFailures"] = failed
    if not args.dry_run:
      manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf8")

    print(f"PNG assets exported: {len(exported)}")
    print(f"PNG export failures: {len(failed)}")
    if args.dry_run:
      print(f"Dry run: would update {manifest_path}")


def read_texture_images(UnityPy, bundle_path):
    env = UnityPy.load(str(bundle_path))
    images = []
    for obj in env.objects:
      if obj.type.name != "Texture2D":
        continue
      data = obj.read()
      image = data.image
      if image.mode != "RGBA":
        image = image.convert("RGBA")
      images.append(image)
    return images


def minimal_asset(asset):
    return {
      "SourceJson": asset.get("SourceJson", ""),
      "OutputFile": asset.get("OutputFile", ""),
      "Address": asset.get("Address", ""),
      "BundleHash": asset.get("BundleHash", "")
    }


def current_timestamp():
    from datetime import datetime, timezone
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


if __name__ == "__main__":
    main()
