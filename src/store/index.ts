// External libraries
import { createStore, combineReducers, Store } from 'redux'

// Internal files
import * as reducers from './ducks'
import { TodoState } from './ducks/todo'
import { ThemeState } from './ducks/theme'

export interface AppState {
  todos: TodoState,
  theme: ThemeState
}

const store: Store<AppState> = createStore<AppState>(combineReducers<AppState>(reducers))

export default store
