import { IPlugin } from '@peajs/types'

export default class RestPlugin implements IPlugin {
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
