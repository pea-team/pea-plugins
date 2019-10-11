import { IPlugin } from '@peajs/types'
import { addLessLoader } from 'customize-cra'

export default class LessPlugin implements IPlugin {
  constructor(private options: any = {}) {}

  updateWebpackConfig(config: any) {
    return addLessLoader(this.options)(config)
  }
}
