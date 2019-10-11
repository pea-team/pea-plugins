import { addBabelPlugin } from 'customize-cra'

export default class AntdProPlugin {
  constructor(private options: any = {}) {}

  updateWebpackConfig(config: any) {
    const { style = true } = this.options
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
  }
}
