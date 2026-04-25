import argparse
import hashlib
import json
import sys
from pathlib import Path


def main():
    cli = argparse.ArgumentParser(description="Export icon PNGs from temporary UnityFS work bundles.")
    cli.add_argument("--plan", required=True, help="JSON export plan produced by ExportIconPngs.gen.")
    cli.add_argument("--result", required=True, help="JSON result file to write.")
    cli.add_argument("--dry-run", action="store_true", help="Decode and report without writing PNGs.")
    args = cli.parse_args()

    root = Path(__file__).resolve().parent
    deps = root / ".pydeps"
    if deps.is_dir():
        sys.path.insert(0, str(deps))

    try:
        import UnityPy
        from PIL import Image
    except ModuleNotFoundError as error:
        raise SystemExit(
            "Missing decoder dependencies. Install local packages with:\n"
            "  python -m pip install --target .\\.pydeps UnityPy Pillow texture2ddecoder"
        ) from error

    plan = json.loads(Path(args.plan).read_text(encoding="utf8"))
    items = plan.get("Items", [])
    exported = []
    failed = []

    for bundle_file, bundle_items in group_by_bundle(items).items():
        try:
            bundle = read_bundle(UnityPy, bundle_file)
        except Exception as error:
            for item in bundle_items:
                failed.append(failure(item, str(error)))
            continue

        for item in bundle_items:
            try:
                selected = select_image(bundle, item)
                image = selected["image"]
                if image.mode != "RGBA":
                    image = image.convert("RGBA")

                probe_result = compare_probe(Image, image, item.get("ProbeFile", ""))
                if item.get("RequiresProbePixelMatch") and probe_result.get("ProbePixelMatch") is not True:
                    failed.append(failure(
                        item,
                        "Decoded PNG did not match probe image pixels",
                        probe_result
                    ))
                    continue

                png_path = Path(item["PngFile"])
                if not args.dry_run:
                    png_path.parent.mkdir(parents=True, exist_ok=True)
                    image.save(png_path)

                exported.append({
                    "AssetId": item.get("AssetId", ""),
                    "PngFile": str(png_path),
                    "PngWidth": image.width,
                    "PngHeight": image.height,
                    "PngMode": image.mode,
                    "PixelSha256": pixel_hash(image),
                    "ObjectPathId": str(selected.get("path_id")) if selected.get("path_id") is not None else None,
                    "SelectedObjectName": selected.get("name", ""),
                    "SelectedObjectType": selected.get("type", ""),
                    **probe_result
                })
            except Exception as error:
                failed.append(failure(item, str(error)))

    Path(args.result).write_text(json.dumps({
        "Exported": exported,
        "Failed": failed
    }, indent=2) + "\n", encoding="utf8")

    print(f"PNG assets exported: {len(exported)}")
    print(f"PNG export failures: {len(failed)}")


def group_by_bundle(items):
    grouped = {}
    for item in items:
        grouped.setdefault(item.get("BundleFile", ""), []).append(item)
    return grouped


def read_bundle(UnityPy, bundle_file):
    env = UnityPy.load(str(bundle_file))
    sprites = {}
    textures = {}
    first_texture = None

    for obj in env.objects:
        if obj.type.name == "Sprite":
            data = obj.read()
            name = getattr(data, "m_Name", "") or getattr(data, "name", "")
            if name and name not in sprites:
                sprites[name] = {
                    "image": data.image,
                    "path_id": obj.path_id,
                    "name": name,
                    "type": "Sprite",
                }
        elif obj.type.name == "Texture2D":
            data = obj.read()
            name = getattr(data, "m_Name", "") or getattr(data, "name", "")
            record = {
                "image": data.image,
                "path_id": obj.path_id,
                "name": name,
                "type": "Texture2D",
            }
            if first_texture is None:
                first_texture = record
            if name and name not in textures:
                textures[name] = record

    return {
        "sprites": sprites,
        "textures": textures,
        "first_texture": first_texture
    }


def select_image(bundle, item):
    resource_type = item.get("ResourceType", "")
    if resource_type == "Sprite":
        sprite_name = item.get("SpriteName", "")
        selected = bundle["sprites"].get(sprite_name)
        if selected is None:
            raise ValueError(f"Sprite not found in bundle: {sprite_name}")
        return selected

    texture_name = item.get("TextureName", "")
    if texture_name and texture_name in bundle["textures"]:
        return bundle["textures"][texture_name]
    if bundle["first_texture"] is not None:
        return bundle["first_texture"]
    raise ValueError("Texture2D image not found in bundle")


def compare_probe(Image, image, probe_file):
    if not probe_file:
        return {}
    probe_path = Path(probe_file)
    if not probe_path.is_file():
        return {
            "ProbePixelMatch": False,
            "ProbePixelSha256": "",
            "ProbeError": f"Missing probe file: {probe_file}"
        }
    probe = Image.open(probe_path).convert("RGBA")
    probe_sha = pixel_hash(probe)
    return {
        "ProbePixelSha256": probe_sha,
        "ProbePixelMatch": image.size == probe.size and image.tobytes() == probe.tobytes()
    }


def pixel_hash(image):
    return hashlib.sha256(image.tobytes()).hexdigest()


def failure(item, error, extra=None):
    out = {
        "AssetId": item.get("AssetId", ""),
        "PngFile": item.get("PngFile", ""),
        "ResourceType": item.get("ResourceType", ""),
        "SpriteName": item.get("SpriteName", ""),
        "TextureName": item.get("TextureName", ""),
        "Error": error
    }
    if extra:
        out.update(extra)
    return out


if __name__ == "__main__":
    main()
