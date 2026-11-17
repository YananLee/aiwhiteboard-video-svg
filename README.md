# AIWhiteboard.Video SVG title card

Create a simple whiteboard-style animated title SVG locally. This package does not call an AI service or render full videos. For script-to-whiteboard video creation and editing, use [AIWhiteboard.Video](https://aiwhiteboard.video/).

```sh
npm install aiwhiteboard-video-svg
```

```js
import { renderTitle } from 'aiwhiteboard-video-svg';
import { writeFileSync } from 'node:fs';

writeFileSync('title.svg', renderTitle('How it works'));
```

The SVG uses browser animation and can be embedded in a web page. Options include `width`, `height`, `ink`, `background`, and `duration`. MIT licensed, no runtime dependencies.

## Additional SVG packages

Small local SVG utilities are maintained in [`python/`](./python/), [`jsr/`](./jsr/), and [`rust/`](./rust/). They do not call the website's export or AI service.

- JSR: [`@yananlee/aiwhiteboard-video-svg`](https://jsr.io/@yananlee/aiwhiteboard-video-svg)
- Rust: [`aiwhiteboard-video-svg`](https://crates.io/crates/aiwhiteboard-video-svg)
- Python: `aiwhiteboard-video-svg` source and built distributions are ready in `python/`; PyPI upload is pending an account publishing credential.
