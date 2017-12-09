/**
 * A react HOC that renders a provided component and its children based on 
 * url and url events. 
 */
import routes from './routes'

export const initHistory = (Component, store) => (props) => {
  setup(store)
}

// Setup history listeners, dispatch urls to 
function setup (store) {
}