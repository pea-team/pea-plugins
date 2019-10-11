# pea-plugin-drawer

## Installation

```sh
npm i pea-plugin-drawer
```

## Usage

### Config plugin

```js
import DrawerPlugin from 'pea-plugin-drawer'

export default {
  plugins: [new DrawerPlugin()],
}
```

### Usage in Component

```bash
.
├── pea.config.ts
├── src
│   ├── modals
│   │   └── Login.tsx
│   └── pages
│       └── index.tsx
└── tsconfig.json
```

## License

[MIT License](https://github.com/pea-team/pea-plugins/blob/master/LICENSE)
