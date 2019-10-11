import { createDrawerConfig } from './createDrawerConfig'
import { watchDrawerConfig } from './watchDrawerConfig'
import { watchDrawers } from './watchDrawers'

export default class DrawerPlugin {
  beforeCompile() {
    createDrawerConfig()
    watchDrawerConfig()
    watchDrawers()
  }

  updateWebpackConfig(config: any) {
    return config
  }

  addImportCode() {
    return `
      import { Drawers } from '@peajs/drawer'
      import drawers from './config/drawer.config'
    `
  }

  addBootstrapCode() {
    return `
      Pea.updateConfig({drawers})
    `
  }

  addRenderCode() {
    return `
      <Drawers config={Pea.config.drawers} />
    `
  }
}
