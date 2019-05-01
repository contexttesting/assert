import Context from '../context'
import { throws, deepEqual } from '../..'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'deep equal'() {
    try {
      deepEqual('test', 'not-test')
    } catch (err) {
      return err.message
    }
  },
  async 'throws'() {
    const error = new Error()
    try {
      await throws({
        fn() { throw error },
        error: new Error(),
      })
    } catch (err) {
      return err.message
    }
  },
}

export default T