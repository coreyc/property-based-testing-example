import jsc from 'jsverify'
import { add } from './'

describe('add()', () => {
  it('should be commutative', () => {
    jsc.assert(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      return add(a, b) === add(b, a)
    }))
  })
})
