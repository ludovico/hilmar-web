import * as React from 'react'
import { render } from 'react-dom'
import createApp from 'app'
import store from 'store'

const App = createApp(store)

// All other styles collected here
require('styles/main.css')
require('flexboxgrid/dist/flexboxgrid.css')

render(
  <App />,
  document.getElementById('root')
)
