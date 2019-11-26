import { IPlugin } from '@peajs/types'

export default class GraphqlPlugin implements IPlugin {
  addImportCode() {
    return `
      import { config as configGraphql } from 'stook-graphql'
    `
  }

  addBootstrapCode() {
    return `
      configGraphql(Pea.config.graphql||{})
    `
  }
}
