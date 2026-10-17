#!/usr/bin/env python3
"""Generate the boringfunnels desktop icon set (PNG) from the product mark.

The mark (public/icon.svg): a green rounded square (#00A651) carrying three
near-black bars that step inward — the boringfunnels funnel. Rendered with
4x supersampling for crisp small sizes.
"""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageDraw

GREEN = (0, 166, 81, 255)  # #00A651
INK = (11, 13, 10, 255)  # #0B0D0A
SIZES = [16, 32, 48, 64, 128, 256, 512]
SS = 4  # supersample factor


def render(size: int) -> Image.Image:
    big = size * SS
    k = big / 26.0  # the SVG viewBox is 26x26
    img = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # Background: rounded square, rx=7.
    d.rounded_rectangle((0, 0, big - 1, big - 1), radius=7 * k, fill=GREEN)
    # The three funnel bars: x, y, w, h, rx from the SVG.
    d.rounded_rectangle((5 * k, 7 * k, (5 + 16) * k, (7 + 3) * k), radius=1.5 * k, fill=INK)
    d.rounded_rectangle((8 * k, 11.5 * k, (8 + 10) * k, (11.5 + 3) * k), radius=1.5 * k, fill=INK)
    d.rounded_rectangle((11 * k, 16 * k, (11 + 4) * k, (16 + 3) * k), radius=1.5 * k, fill=INK)
    return img.resize((size, size), Image.LANCZOS)


def main() -> int:
    out_dir = Path(__file__).resolve().parent / "icons"
    out_dir.mkdir(parents=True, exist_ok=True)
    for s in SIZES:
        render(s).save(out_dir / f"boringfunnels-{s}.png")
        print(f"wrote icons/boringfunnels-{s}.png")
    return 0


if __name__ == "__main__":
    sys.exit(main())
