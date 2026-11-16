/* @ts-self-types="./mod.d.ts" */
const escapeXml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
const color = (value) => /^#[0-9a-fA-F]{6}$/.test(value);

/** Render a simple title card with an animated marker underline. */
export function renderTitle(text, options = {}) {
  const { width = 800, height = 450, ink = '#1d4ed8', background = '#ffffff', duration = 1.5 } = options;
  if (!String(text).trim() || String(text).length > 120) throw new TypeError('text must contain 1 to 120 characters');
  if (!Number.isInteger(width) || width < 300 || !Number.isInteger(height) || height < 150 || !Number.isFinite(duration) || duration <= 0) throw new TypeError('invalid size or duration');
  if (!color(ink) || !color(background)) throw new TypeError('colors must be #RRGGBB');
  const safeText = escapeXml(text);
  const x1 = Math.round(width * 0.18);
  const x2 = Math.round(width * 0.82);
  const y = Math.round(height * 0.62);
  const length = x2 - x1;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${safeText}"><rect width="100%" height="100%" fill="${background}"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial,sans-serif" font-size="52" font-weight="700" fill="${ink}" opacity="0">${safeText}<animate attributeName="opacity" from="0" to="1" dur="${duration}s" fill="freeze"/></text><path d="M ${x1} ${y} L ${x2} ${y}" fill="none" stroke="${ink}" stroke-width="6" stroke-linecap="round" stroke-dasharray="${length}" stroke-dashoffset="${length}"><animate attributeName="stroke-dashoffset" from="${length}" to="0" dur="${duration}s" fill="freeze"/></path></svg>`;
}
