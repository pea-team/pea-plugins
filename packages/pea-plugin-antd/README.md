# pea-plugin-antd

## Installation

```sh
npm i pea-plugin-antd
```

## Usage

```js
import AntdPlugin from 'pea-plugin-antd'

export default {
  plugins: [new AntdPlugin()],
}
```

## Customize Ant Design Theme

to modify the default Ant Design theme:

```js
import AntdPlugin from 'pea-plugin-antd'
import LessPlugin from 'pea-plugin-less'

export default {
  plugins: [
    new LessPlugin({
      modifyVars: {
        'primary-color': 'black',
        'link-color': '#1DA57A',
        'border-radius-base': '10px',
      },
      javascriptEnabled: true,
    }),
    new AntdPlugin({
      style: true,
    }),
  ],
}
```

## License

[MIT License](https://github.com/pea-team/pea-plugins/blob/master/LICENSE)
