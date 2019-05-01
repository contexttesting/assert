const { deepEqual: _deepEqual, throws: _throws } = require('./depack')
const assert = require('assert')
const { equal, ok } = assert

/**
 * The Deep Equal Assertion With Color.
 * @param {?} actual
 * @param {?} expected
 * @param {string} [message]
 */
function deepEqual(actual, expected, message) {
  return _deepEqual(actual, expected, message)
}

/**
 * Assert that a function throws and check the thrown error properties.
 * @param {!_assertThrows.Config} config Parameters to the `assert-throws` method.
 * @param {!Function} config.fn The function to test, either sync or async.
 * @param {*|!Array<*>} [config.args] The arguments or single argument to pass to the function.
 * @param {*} [config.context] The context in which to execute the function. Global context will be set by default.
 * @param {_assertThrows.Assertion} [config.message] A string, regex, or function to test the message.
 * @param {_assertThrows.Assertion} [config.code] A string, regex, or function to test the code.
 * @param {_assertThrows.Assertion} [config.stack] A string, regex, or function to test the stack.
 * @param {_assertThrows.Assertion} [config.prop] A string, regex, or function to test any other property of the error.
 * @param {Error} [config.error] An error to perform strict comparison against.
 * @example
```
await throws({
  fn: method,
  args: ['test', true],
  message: /An error occurred:/, // regex
  code: 'ENOTEST',               // string
  stack(stack) {                 // function
    equal(stack.length, 2)
  }
})
```
 */
async function throws(config) {
  return _throws(config)
}

module.exports = {
  deepEqual,
  throws,
  assert,
  equal,
  ok,
}

/* typal node_modules/assert-throws/types/index.xml closure */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {_assertThrows.Assertion} Assertion An assertion to perform.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {!(string|RegExp|!Function)} _assertThrows.Assertion An assertion to perform.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {_assertThrows.Config} Config Parameters to the `assert-throws` method.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {Object} _assertThrows.Config Parameters to the `assert-throws` method.
 * @prop {!Function} fn The function to test, either sync or async.
 * @prop {*|!Array<*>} [args] The arguments or single argument to pass to the function.
 * @prop {*} [context] The context in which to execute the function. Global context will be set by default.
 * @prop {_assertThrows.Assertion} [message] A string, regex, or function to test the message.
 * @prop {_assertThrows.Assertion} [code] A string, regex, or function to test the code.
 * @prop {_assertThrows.Assertion} [stack] A string, regex, or function to test the stack.
 * @prop {_assertThrows.Assertion} [prop] A string, regex, or function to test any other property of the error.
 * @prop {Error} [error] An error to perform strict comparison against.
 */
