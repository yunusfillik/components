---
sidebar_position: 3
title: Installation
sidebar_label: Installation
authors: [onur]
---

import Authors from '@theme/authors'

# Installation

<Authors frontMatter={frontMatter} />

<p class="description">Install ParamTech design system, React UI framework.</p>

## Default installation

Run one of the following commands to add ParamTech design system to your project:

```bash npm2yarn
npm install @paramtechlab/shattered @paramtechlab/tokens
```

## Peer dependencies

:::info
Please note that [react](https://www.npmjs.com/package/react), [react-dom](https://www.npmjs.com/package/react-dom) and [antd](https://www.npmjs.com/package/antd)  are peer dependencies, meaning you should ensure they are installed before installing ParamTech design system.
:::

```json
"peerDependencies": {
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "antd": "^5.0.0"
},
```

## Styling

ParamTech design system uses [Emotion](https://emotion.sh/docs/introduction) as its default styling engine, but you do not need to use Emotion directly in your projects unless you want to.

```bash npm2yarn
npm install @emotion/react
```

## Fonts

The default font used in the ParamTech design system is @fontsource-variable/inter. If you wish to use different fonts, you can install them from the Fontsource family into your project and use them accordingly.

```bash npm2yarn
npm install @fontsource-variable/inter
```

Then you can import it in your entry point like this:
```jsx
import '@fontsource-variable/inter'
import '@fontsource-variable/open-sans'
import '@fontsource-variable/lexend-deca'
```

:::info
You can customize the font weights, styles, and other properties as needed. For more options and detailed usage, refer to the [Fountsource](https://fontsource.org/) documentation.
:::


