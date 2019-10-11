import { IPlugin } from '@peajs/types'
import { createRouterConfig } from './createRouterConfig'
import { watchRouterConfig } from './watchRouterConfig'
import { watchPages } from './watchPages'

export default class RouterPlugin implements IPlugin {
  beforeCompile() {
    createRouterConfig()
    watchRouterConfig()
    watchPages()
  }

  updateWebpackConfig(config: any) {
    return config
  }

  addImportCode() {
    return `
      import routes from './config/router.config'
      import { Router } from '@peajs/router'
    `
  }

  addBootstrapCode() {
    return `
      Pea.updateConfig({routes})
    `
  }

  addRenderCode() {
    return `
      <Router routes={Pea.config.routes}></Router>
    `
  }
}
