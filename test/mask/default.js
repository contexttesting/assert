import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import assert from '../../depack'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await assert({
      text: input,
    })
    return res
  },
  context: Context,
})