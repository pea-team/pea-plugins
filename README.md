# pea-plugins

## 安装

```sh
npm i pea-plugin-less pea-plugin-antd
```

## 用法

```js
import LessPlugin from 'pea-plugin-less'
import AntdPlugin from 'pea-plugin-antd'

export default {
  plugins: [
    new LessPlugin({
      modifyVars: {
        'primary-color': 'red',
        'link-color': '#1DA57A',
        'border-radius-base': '10px',
      },
      javascriptEnabled: true,
    }),
    new AntdPlugin(),
  ],
}
```

## 官方插件

- [pea-plugin-router](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-router)
- [pea-plugin-rest](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-rest)
- [pea-plugin-graphql](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-graphql)
- [pea-plugin-modal](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-modal)
- [pea-plugin-drawer](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-drawer)
- [pea-plugin-less](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-less)
- [pea-plugin-styled-components](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-styled-components)
- [pea-plugin-styled-jsx](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-styled-jsx)
- [pea-plugin-alias](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-alias)
- [pea-plugin-antd](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-antd)
- [pea-plugin-antd-pro](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-plugin-antd-pro)

## License

[MIT License](https://github.com/pea-team/pea-plugins/blob/master/LICENSE)
