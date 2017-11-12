import test from 'tape'
import TodoReducer, { Todo, TodoAction, TodoState } from '.'

test('Returns initial state upon unrecognized Action type', (t: test.Test) => {
  t.plan(1)

  const initialState: TodoState = {
    status: 'Idle',
    todos: []
  }

  t.equal(TodoReducer(initialState, null), initialState)

})

test('Toggle todo', (t: test.Test) => {
  t.plan(1)

  const todo: Todo = { title: 'Todo 1', done: true }

  const initialState: TodoState = {
    status: 'Idle',
    todos: [todo]
  }

  const expectedState: TodoState = {
    status: 'Idle',
    todos: [{ ...todo, done: !todo.done }]
  }

  const action: TodoAction = {
    type: 'SET_TODO_STATE',
    todo: todo.title
  }

  const resultState = TodoReducer(initialState, action)

  t.deepEqual(resultState, expectedState)

})
