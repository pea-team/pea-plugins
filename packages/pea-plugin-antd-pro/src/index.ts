import { addBabelPlugin } from 'customize-cra'
import { IPlugin } from '@peajs/types'

export default class AntdProPlugin implements IPlugin {
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
