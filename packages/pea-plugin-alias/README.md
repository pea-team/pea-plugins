# pea-plugin-alias

## Installation

```sh
npm i pea-plugin-alias
```

## Usage

```js
import AliasPlugin from 'pea-plugin-alias'
import { join } from 'path'

export default {
  plugins: [
    new AliasPlugin({
      '@components': join(__dirname, 'src/components'),
    }),
  ],
}
```

## License

[MIT License](https://github.com/pea-team/pea-plugins/blob/master/LICENSE)
