import test from 'tape'
import sinon from 'sinon'

import TodoReducer, { Todo, TodoAction, TodoState, toggleState } from '.'

test('TodoReducer tests', (t: test.Test) => {
  t.plan(2)

  const todo: Todo = { title: 'test', done: true }

  const initial: TodoState = {
    status: 'Idle',
    todos: [todo]
  }

  const expected: TodoState = {
    ...initial,
    todos: [{ ...todo, done: !todo.done }]
  }

  const action: TodoAction = {
    type: 'SET_TODO_STATE',
    todo: todo.title
  }

  const result = TodoReducer(initial, action)

  t.equal(TodoReducer(initial, null), initial, 'Should return state')

  t.deepEqual(result, expected, 'Should toggle the todo status')

})

test('TodoReducer actions tests', (t: test.Test) => {
  const storeSpy = {
    dispatch: sinon.spy()
  }

  const todoTitle = 'test title'
  const action: TodoAction = {
    type: 'SET_TODO_STATE',
    todo: todoTitle
  }

  toggleState(todoTitle, storeSpy)

  t.plan(1)

  t.ok(storeSpy.dispatch.calledWith(action))
})
