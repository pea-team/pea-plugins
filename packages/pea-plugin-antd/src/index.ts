import { addBabelPlugin } from 'customize-cra'
import { IPlugin } from '@peajs/types'

export default class AntdPlugin implements IPlugin {
  constructor(private options: any = {}) {}
  updateWebpackConfig(config: any) {
    const { style = true } = this.options || {}

    const newConfig = addBabelPlugin([
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style, // `style: true` 会加载 less 文件
      },
      'antd',
    ])(config)

    return newConfig
  }
}
