import * as React from 'react'
import { toggleState } from 'store/ducks/todo'
import { AppState } from 'store'
import { Store } from 'redux'
import { Todo } from './store/ducks/todo'
import { ScreenSizes } from './store/ducks/theme'

interface AppComponentState {
  todos: Todo[],
  screenSize: ScreenSizes

}

export default (store: Store<AppState>): React.ComponentClass<{}> => {
  class App extends React.Component<{}, AppComponentState> {
    private unsubscribe: () => void

    constructor (props: {}) {
      super(props)

      this.state = {
        todos: store.getState().todos.todos,
        screenSize: store.getState().theme.screenSize
      }
    }

    componentDidMount () {
      this.unsubscribe = store.subscribe(() => {
        this.setState({
          todos: store.getState().todos.todos,
          screenSize: store.getState().theme.screenSize
        })
      })
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

    handleClick (title: string) {
      toggleState(title, store)
    }

    render () {
      const links = ['Inbox', 'Next', 'Waiting']

      return (
        <div>
          <div />
          <div>
            <div className={'pure-u-1-5 bg-secondary pure-menu'}>
              <ul className={'pure-menu-list'}>
                {links.map((link, i) => <li className={'pure-menu-item'}><a className={'pure-menu-link'} href={'#'}>{link}</a></li>)}
              </ul>
            </div>
            <div className={'pure-u-4-5'}>
              <div>
                <h1 className={'color-primary'}>{this.state.screenSize}</h1>
                <ul>
                  {this.state.todos.map((todo, i) => <li><a href={'#'} onClick={(e) => {
                    e.preventDefault()
                    this.handleClick(todo.title)
                  }} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.title}</a></li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  return App
}
