import test from 'tape'
import TodoReducer, { TodoState } from '.'

test('Should return initial state upon unrecognized Action type', (t: test.Test) => {
  t.plan(1)

  const initialState: TodoState = {
    status: 'Idle',
    todos: []
  }

  t.equal(TodoReducer(initialState, null), initialState)

})
