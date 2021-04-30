import * as fs from 'fs/promises'
import { isAccessible} from './units/accessible.js'
import program from './units/commander.js'
import { handleError} from './units/handleEror.js'
import SortFiles from '../module/sort.js'

import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

progrsm.parse(process.argv)

if (!(await isAccessible(program.output))) { 
  await fs.mkdir(program.output)
}

try {
  const sorting = new SortFiles(program.output)
  await sorting.readFolder(resolve(__dirname, program.folder))
} catch (e) {
  handleError(e)
}
 console.log("Can delete sourse folder");

 
// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <h1>Hello Node.js!</h1>
//     </div>
//   );
// };

// export default App;

