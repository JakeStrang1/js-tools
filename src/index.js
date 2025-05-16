import * as compare from './compare.js'
import * as debugTimer from './debugTimer.js'
import * as filterUnique from './filterUnique.js'
import * as formatByteSize from './formatByteSize.js'
import * as formatTime from './formatTime.js'
import * as setDefaults from './setDefaults.js'

const tools = {
  ...compare,
  ...debugTimer,
  ...filterUnique,
  ...formatByteSize,
  ...formatTime,
  ...setDefaults
}

export default tools