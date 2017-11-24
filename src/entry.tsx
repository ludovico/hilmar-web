import * as React from 'react'
import { render } from 'react-dom'
import createApp from 'app'
import store from 'store'

const App = createApp(store)

render(
  <App />,
  document.getElementById('root')
)
