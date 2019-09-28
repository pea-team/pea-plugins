import { addBabelPlugin } from 'customize-cra'

export default (options?: any) => {
  return {
    webpack(config: any) {
      const plugin = ['styled-jsx/babel', options]
      const newConfig = addBabelPlugin(plugin)(config)
      return newConfig
    },
  }
}
