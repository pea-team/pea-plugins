import { addWebpackAlias } from 'customize-cra'

interface Options {
  [key: string]: string
}

export default class AliasPlugin {
  constructor(private options: Options = {}) {}

  updateWebpackConfig(config: any) {
    return addWebpackAlias(this.options || {})(config)
  }
}
