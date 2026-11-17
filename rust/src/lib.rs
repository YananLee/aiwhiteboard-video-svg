//! Lightweight SVG generator associated with AIWhiteboard.Video.

fn escape(input: &str) -> String {
    input
        .chars()
        .map(|c| match c {
            '&' => "&amp;".to_string(),
            '<' => "&lt;".to_string(),
            '>' => "&gt;".to_string(),
            '"' => "&quot;".to_string(),
            '\'' => "&apos;".to_string(),
            _ => c.to_string(),
        })
        .collect()
}

/// Render an animated whiteboard title SVG.
pub fn render_title(text: &str) -> Result<String, &'static str> {
    if text.trim().is_empty() || text.chars().count() > 120 {
        return Err("text must contain 1 to 120 characters");
    }
    let safe = escape(text);
    Ok(format!(
        r##"<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="{safe}"><rect width="100%" height="100%" fill="#ffffff"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial,sans-serif" font-size="52" fill="#1d4ed8" opacity="0">{safe}<animate attributeName="opacity" from="0" to="1" dur="1.5s" fill="freeze"/></text><path d="M 144 279 L 656 279" fill="none" stroke="#1d4ed8" stroke-width="6" stroke-dasharray="512" stroke-dashoffset="512"><animate attributeName="stroke-dashoffset" from="512" to="0" dur="1.5s" fill="freeze"/></path></svg>"##
    ))
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn renders_escaped_svg() {
        let svg = render_title("Hello").unwrap();
        assert!(svg.starts_with("<svg "));
        assert!(svg.ends_with("</svg>"));
        assert!(!svg.contains("<script>"));
    }
}
