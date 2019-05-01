import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import assert from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof assert, 'function')
  },
  async 'calls package without error'() {
    await assert()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await assert({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T