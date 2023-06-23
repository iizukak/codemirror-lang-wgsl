# CodeMirror 6 WGSL language package

This is a WGSL ([WebGPU Shading Language](https://www.w3.org/TR/WGSL/))
language package for [CodeMirror](https://codemirror.net/6/) editor.

## Build and Test

```
$ git clone git@github.com:iizukak/codemirror-lang-wgsl.git
$ cd codemirror-lang-wgsl.git
$ npm install
$ npm run prepare
$ npm test
```

## Usage

`wgslLanguage` and `wgsl` in [index.ts](https://github.com/iizukak/codemirror-lang-wgsl/blob/main/src/index.ts) are our public API.
You can use like below code.

```typescript
import { EditorView, basicSetup } from "codemirror";

import { wgsl } from "../dist/index";

let editor = new EditorView({
  extensions: [basicSetup, wgsl()],
  parent: document.body,
  }`,
});
```



## License Notification

This repository is based on some other libraries.

- Basic design of this repo is from [codemirror/lang-example](https://github.com/codemirror/lang-example)
- `src/syntax.grammar` is based on [use.gpu](https://gitlab.com/unconed/use.gpu/-/tree/master/packages/shader/src/wgsl/grammar).
- `src/index.ts` is based on [arsiliath/codemirror-lang-wgsl](https://github.com/arsiliath/codemirror-lang-wgsl/).