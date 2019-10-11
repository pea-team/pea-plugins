export default class GraphqlPlugin {
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
