import * as React from 'react'
import { render } from 'react-dom'
import createApp from 'app'
import store from 'store'
import watchMedia from 'services/media-queries'

// All other styles collected here
import 'styles/reboot.css'

// Initiate media queries
watchMedia(store)([
  { size: 480, title: 'xxs' },
  { size: 768, title: 'xs' },
  { size: 991, title: 'sm' },
  { size: 1200, title: 'md' },
  { size: 1400, title: 'lg' },
  { size: 1600, title: 'xl' }
])

const App: React.Component = createApp(store)

render(
  <App />,
  document.getElementById('root')
)
