import { add } from './myLib.mjs'
import assert from 'assert'


console.log('add()\nShould add numbers')

try {
    assert.strictEqual(add(1, 2), 3)
    console.log('Success')
} catch (e) {
    console.log('FAIL')
    console.error(e)
}