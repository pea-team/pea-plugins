# pea-alias

## Installation

```sh
npm i pea-alias
```

## Usage

```js
import alias from 'pea-alias'
import { join } from 'path'

export default {
  plugins: [
    alias({
      '@components': join(__dirname, 'src/components'),
    }),
  ],
}
```

## License

[MIT License](https://github.com/forsigner/pea-plugins/blob/master/LICENSE)
