import * as React from 'react'
import { Todo, toggleState } from 'store/ducks/todo'
import { AppState } from 'store'
import { Store } from 'redux'
import Hello from 'components/hello'
import { ScreenSizes } from './store/ducks/theme'

// All other styles collected here
require('styles/reboot.css')
require('flexboxgrid/dist/flexboxgrid.css')

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
        <div className={'container'} >
        <div className={'row'} >
          <div className={'col-xs-5'}>
            <div className={'box'}>
              <ul className={'pure-menu-list'}>
                {links.map((link, i) => <li key={'link' + i} className={'pure-menu-item'}><a className={'pure-menu-link'} href={'#'}>{link}</a></li>)}
              </ul>
            </div>
          </div>
          <div className={'pure-u-4-5'}>
            <div>
              <Hello name={'Julius'} />
              <h1 className={'color-primary'}>{this.state.screenSize}</h1>
              <ul>
                {this.state.todos.map((todo, i) => <li key={'todo' + i}><a href={'#'} onClick={(e) => {
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
