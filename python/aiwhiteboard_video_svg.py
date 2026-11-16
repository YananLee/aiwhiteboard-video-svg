"""Animated title SVG for AIWhiteboard.Video workflows."""
from html import escape
import math
import re


def render_title(text, *, width=800, height=450, ink="#1d4ed8", background="#ffffff", duration=1.5):
    if not isinstance(text, str) or not text.strip() or len(text) > 120:
        raise ValueError("text must contain 1 to 120 characters")
    if not isinstance(width, int) or width < 300 or not isinstance(height, int) or height < 150 or not isinstance(duration, (int, float)) or not math.isfinite(duration) or duration <= 0 or not all(re.fullmatch(r"#[0-9a-fA-F]{6}", c) for c in (ink, background)):
        raise ValueError("invalid options")
    x1, x2, y = round(width * .18), round(width * .82), round(height * .62)
    length = x2 - x1
    safe = escape(text, quote=True)
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="{safe}"><rect width="100%" height="100%" fill="{background}"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial,sans-serif" font-size="52" fill="{ink}" opacity="0">{safe}<animate attributeName="opacity" from="0" to="1" dur="{duration}s" fill="freeze"/></text><path d="M {x1} {y} L {x2} {y}" fill="none" stroke="{ink}" stroke-width="6" stroke-dasharray="{length}" stroke-dashoffset="{length}"><animate attributeName="stroke-dashoffset" from="{length}" to="0" dur="{duration}s" fill="freeze"/></path></svg>'
