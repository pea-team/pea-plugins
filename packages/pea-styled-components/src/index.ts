import { addBabelPlugin } from 'customize-cra'

export default (options?: any) => {
  return {
    webpack(config: any, env: string) {
      if (env !== 'development') {
        return config
      }
      const plugin = ['babel-plugin-styled-components', options]
      const newConfig = addBabelPlugin(plugin)(config)
      return newConfig
    },
  }
}
