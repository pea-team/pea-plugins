import { addBabelPlugin } from 'customize-cra'

export default class StyledJsxPlugin {
  constructor(private options: any = {}) {}

  updateWebpackConfig(config: any) {
    const plugin = ['styled-jsx/babel', this.options]
    const newConfig = addBabelPlugin(plugin)(config)
    return newConfig
  }
}
