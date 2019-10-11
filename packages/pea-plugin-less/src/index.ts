import { addLessLoader } from 'customize-cra'

export default class LessPlugin {
  constructor(private options: any = {}) {}

  updateWebpackConfig(config: any) {
    return addLessLoader(this.options)(config)
  }
}
