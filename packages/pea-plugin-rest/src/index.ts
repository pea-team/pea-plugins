import { IPlugin } from '@peajs/types'

export default class RestPlugin implements IPlugin {
  addImportCode() {
    return `
      import { config as configRest } from 'stook-rest'
    `
  }

  addBootstrapCode() {
    return `
      configRest(Pea.config.rest||{})
    `
  }
}
