import { IPlugin } from '@peajs/types'

export default class GraphqlPlugin implements IPlugin {
  addImportCode() {
    return `
      import { config } from '@peajs/graphql'
    `
  }

  addBootstrapCode() {
    return `
      config(Pea.config.graphql||{})
    `
  }
}
