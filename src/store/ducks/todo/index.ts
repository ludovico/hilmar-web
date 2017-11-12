interface ToggleTodo {
  type: 'SET_TODO_STATE',
  todo: string
}

type TodoAction = ToggleTodo | null

export interface TodoState {
  status: 'Idle',
  todos: Todo[]
}

const InitialState: TodoState = {
  status: 'Idle',
  todos: [
    { title: 'Clean kitchen', done: false },
    { title: 'Burn kitchen', done: true },
    { title: 'Clean kittens', done: false }
  ]
}

export type Todo = {
  title: string,
  done: boolean
}

export default (state: TodoState = InitialState, action: TodoAction): TodoState => {
  if (!action) {
    return state
  }

  if (action.type === 'SET_TODO_STATE') {
    const todoIndex = state.todos.findIndex((todo) => todo.title === action.todo)
    return {
      ...state,
      todos: [
        ...state.todos.slice(0, todoIndex),
        { ...state.todos[todoIndex], done: !state.todos[todoIndex].done },
        ...state.todos.slice(todoIndex + 1)
      ]
    }
  }
  return state
}

export function toggleState (title: string, store) {
  store.dispatch({
    type: 'SET_TODO_STATE',
    todo: title
  })
}
