import { addBabelPlugin } from 'customize-cra'

export default (options?: any) => {
  const { style = true } = options || {}
  return {
    webpack(config: any) {
      return addBabelPlugin([
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style, // `style: true` 会加载 less 文件
        },
        'antd',
      ])(config)
    },
  }
}
