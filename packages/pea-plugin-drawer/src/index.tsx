import { IPlugin } from '@peajs/types'
import { createDrawerConfig } from './createDrawerConfig'
import { watchDrawerConfig } from './watchDrawerConfig'
import { watchDrawers } from './watchDrawers'

export default class DrawerPlugin implements IPlugin {
  beforeCompile() {
    createDrawerConfig()

    if (process.env.NODE_ENV === 'development') {
      watchDrawerConfig()
      watchDrawers()
    }
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
