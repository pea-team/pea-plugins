import { addBabelPlugin } from 'customize-cra'

export default (options?: any) => {
  const { style = true } = options || {}
  return {
    webpack(config: any) {
      return addBabelPlugin([
        'import',
        {
          libraryName: 'ant-design-pro',
          libraryDirectory: 'lib',
          style,
          camel2DashComponentName: false,
        },
        'ant-design-pro',
      ])(config)
    },
  }
}
