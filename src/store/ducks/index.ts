/**
 * Collect all ducks in a single importable file
 *
 * Pattern:
 *  export { default as [ReducerName]} from '[Duck]'
 */

import todos from './todo'
import theme from './theme'

export default {
  todos,
  theme
}
