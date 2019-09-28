# pea-plugins

## 安装

```sh
npm i pea-less pea-antd
```

## 用法

```js
import less from 'pea-less'
import antd from 'pea-antd'

export default {
  plugins: [
    less({
      modifyVars: {
        'primary-color': 'red',
        'link-color': '#1DA57A',
        'border-radius-base': '10px',
      },
      javascriptEnabled: true,
    }),
    antd(),
  ],
}
```

## 官方插件

- [pea-less](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-less)
- [pea-styled-components](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-styled-components)
- [pea-styled-jsx](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-styled-jsx)
- [pea-alias](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-alias)
- [pea-antd](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-antd)
- [pea-antd-pro](https://github.com/pea-team/pea-plugins/tree/master/packages/pea-antd-pro)

## License

[MIT License](https://github.com/pea-team/pea-plugins/blob/master/LICENSE)
