import path from 'path'
import fs from 'fs'

export const appDir = path.resolve(fs.realpathSync(process.cwd()))
export const srcDir = path.resolve(fs.realpathSync(process.cwd()), 'src')

export const tmpDir = `${srcDir}/.pea`
export const tmpConfigDir = `${tmpDir}/config`

export const pagesDir = `${srcDir}/pages`
export const pageFiles = `${srcDir}/pages/**/*.{ts,tsx}`

export const modalsDir = `${srcDir}/modals`
export const modalFiles = `${srcDir}/modals/**/*.{ts,tsx}`

export const modalConfigPath = `${srcDir}/config/modal.config.ts`
export const tmpModalsConfigPath = `${tmpDir}/config/modal.config.ts`
