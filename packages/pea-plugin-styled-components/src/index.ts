import { addBabelPlugin } from 'customize-cra'

export default class StyledComponentsPlugin {
  constructor(private options: any = {}) {}

  updateWebpackConfig(config: any, env: string) {
    if (env !== 'development') {
      return config
    }
    const plugin = ['babel-plugin-styled-components', this.options]
    const newConfig = addBabelPlugin(plugin)(config)
    return newConfig
  }
}
