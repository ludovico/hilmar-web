import test from 'tape'
import React from 'react'
import Hello from '.'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test('Render correct hello message', (t: test.Test) => {
  const tests = [
    { name: 'Eivind', expected: 'Hello, Eivind!' },
    { name: 'Lisa', expected: 'Hello, Lisa!' },
    { name: 'Loffe', expected: 'Hello, Loffe!' },
    { name: 'Roar', expected: 'Go to bed, Roar...' }
  ]

  t.plan(tests.length)

  tests.forEach(test => {
    t.equal(test.expected, shallow(<Hello name={test.name} />).text())
  })
})
