import { addWebpackAlias } from 'customize-cra'

interface Options {
  [key: string]: string
}

export default (options?: Options) => {
  return {
    webpack(config: any) {
      return addWebpackAlias(options || {})(config)
    },
  }
}
