import { addLessLoader } from 'customize-cra'

export default (options?: any) => {
  return {
    webpack(config: any) {
      return addLessLoader(options)(config)
    },
  }
}
