import test from 'tape'
import powerFunc from './api'

test('Testing "power" function', (t) => {
  t.plan(1)

  t.equal(powerFunc(3, 0), 1, ('Any number taken to power 0 should be 1'))
})
