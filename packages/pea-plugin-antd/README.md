# pea-plugin-antd

## Installation

```sh
npm i pea-plugin-antd
```

## Usage

```js
import antd from 'pea-plugin-antd'

export default {
  plugins: [antd()],
}
```

## Customize Ant Design Theme

to modify the default Ant Design theme:

```js
import antd from 'pea-plugin-antd'
import less from 'pea-plugin-less'

export default {
  plugins: [
    less({
      modifyVars: {
        'primary-color': 'black',
        'link-color': '#1DA57A',
        'border-radius-base': '10px',
      },
      javascriptEnabled: true,
    }),
    antd({
      style: true,
    }),
  ],
}
```

## License

[MIT License](https://github.com/forsigner/pea-plugins/blob/master/LICENSE)
