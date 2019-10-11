export default class RestPlugin {
  addImportCode() {
    return `
      import { config } from '@peajs/rest'
    `
  }

  addBootstrapCode() {
    return `
      config(Pea.config.rest||{})
    `
  }
}
