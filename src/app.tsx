import * as React from 'react'
import { Todo, toggleState } from 'store/ducks/todo'
import { AppState } from 'store'
import { Store } from 'redux'
import Hello from 'components/hello'
import { ScreenSizes } from './store/ducks/theme'
import * as styles from './app.css'

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
          {/* <div className={'col-xs-5'}>
            <ul className={''}>
              {links.map((link, i) => <li key={'link' + i} className={''}>
                <a className={''} href={'#'}>{link}</a>
              </li>)}
            </ul>
          </div> */}

          <div className={['row', styles.topnav].join(' ')} >
              <Hello className={styles.hello} name={'Julius'} />
          </div>
        </div>
      )
    }
  }
  return App
}
