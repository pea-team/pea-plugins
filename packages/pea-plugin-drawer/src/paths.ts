import path from 'path'
import fs from 'fs'

export const srcDir = path.resolve(fs.realpathSync(process.cwd()), 'src')

export const tmpDir = `${srcDir}/.pea`
export const tmpConfigDir = `${tmpDir}/config`

export const drawersDir = `${srcDir}/drawers`
export const drawerFiles = `${srcDir}/drawers/**/*.{ts,tsx}`

export const drawerConfigPath = `${srcDir}/config/drawer.config.ts`
export const tmpDrawersConfigPath = `${tmpDir}/config/drawer.config.ts`
