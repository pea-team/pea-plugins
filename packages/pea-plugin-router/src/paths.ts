import path from 'path'
import fs from 'fs'

export const srcDir = path.resolve(fs.realpathSync(process.cwd()), 'src')

export const tmpDir = `${srcDir}/.pea`
export const tmpConfigDir = `${tmpDir}/config`

export const pagesDir = `${srcDir}/pages`
export const pageFiles = `${srcDir}/pages/**/*.{ts,tsx}`

export const routerConfigPath = `${srcDir}/config/router.config.ts`
export const tmpRouterConfigPath = `${tmpDir}/config/router.config.ts`
