import * as React from 'react'
import { toggleState } from 'store/ducks/todo'
import { AppState } from 'store'
import { Store } from 'redux'
import { Todo } from './store/ducks/todo'
import { ScreenSizes } from './store/ducks/theme'

const styles = {
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    nav: {
      height: 100,
      backgroundColor: 'red',
      flex: 1
    },
    mainContainer: {
      display: 'flex',
      flexDirection: 'row'
    }
  },
  md: {
    outerContainer: {
      display: 'flex',
      flexDirection: 'column',
      nav: {
        height: 100,
        backgroundColor: 'green',
        flex: 1
      },
      mainContainer: {
        display: 'flex',
        flexDirection: 'row'
      }
    }
  }
}

interface AppComponentState {
  todos: Todo[],
  screenSize: ScreenSizes

}

export default (store: Store<AppState>): React.Component<any, AppComponentState> => {
  class App extends React.Component<any, AppComponentState> {
    private unsubscribe: () => void

    constructor (props: any) {
      super(props)

      console.log(store)
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
      const responsiveStyles = this.state.screenSize === 'md' ? styles.md : styles

      return (
        <div style={responsiveStyles.outerContainer}>
          <div style={responsiveStyles.outerContainer.nav} />
          <div style={responsiveStyles.outerContainer.mainContainer}>
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
