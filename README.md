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
