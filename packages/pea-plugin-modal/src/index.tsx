import { createModalConfig } from './createModalConfig'
import { watchModalConfig } from './watchModalConfig'
import { watchModals } from './watchModals'

export default class ModalPlugin {
  beforeCompile() {
    createModalConfig()
    watchModalConfig()
    watchModals()
  }

  updateWebpackConfig(config: any) {
    return config
  }

  addImportCode() {
    return `
      import { Modals, modalStore } from '@peajs/modal'
      import modals from './config/modal.config'
    `
  }

  addBootstrapCode() {
    return `
      Pea.updateConfig({modals})

      if (Pea.config.modalContainer) {
        modalStore.setModalContainer(Pea.config.modalContainer)
      }
    `
  }

  addRenderCode() {
    return `
      <Modals config={Pea.config.modals} />
    `
  }
}
