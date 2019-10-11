import { addWebpackAlias } from 'customize-cra'
import { IPlugin } from '@peajs/types'

interface Options {
  [key: string]: string
}

export default class AliasPlugin implements IPlugin {
  constructor(private options: Options = {}) {}

  updateWebpackConfig(config: any) {
    return addWebpackAlias(this.options || {})(config)
  }
}
