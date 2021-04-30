import * as fs from 'fs/promises'
import { isAccessible} from './units/accessible.js'
import { handleError} from './units/handleEror.js'
import { extname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

class SortFiles {
  constructor(dist) { 
    this.dist = dist
  }

  // #copyFile - приватний метод
  async #copyFile(file) { 
    const folder = extname(file.path)
    const targetPath = join(this.dist, folder)
    try {
      if (!(await isAccessible(program.output))) { 
      await fs.mkdir(program.output)
      }
      await fs.copyFile(file.path,join(targetPath, file.name))
    } catch (e) { 
      handleError(e)
    }
  } 

  async readFolder(base) { 
    const file = await fs.readdir(base)
    for (const item of files) { 
      const localBase = join(base, item)
      const state = await fs.stat(localBase)
      if (state.isDirectory){
        await this.readFolder(localBase)
      } else { 
        await this.#copyFile({name: item, path: localBase})
      }
    }
  }
 }

export default SortFiles

