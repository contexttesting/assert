/* alanode example/ */
import assert from '../src'

(async () => {
  const res = await assert({
    text: 'example',
  })
  console.log(res)
})()