import { IPlugin } from '@peajs/types'
import { addBabelPlugin } from 'customize-cra'

export default class StyledJsxPlugin implements IPlugin {
  constructor(private options: any = {}) {}

  updateWebpackConfig(config: any) {
    const plugin = ['styled-jsx/babel', this.options]
    const newConfig = addBabelPlugin(plugin)(config)
    return newConfig
  }
}
