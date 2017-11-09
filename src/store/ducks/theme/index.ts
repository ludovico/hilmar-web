import { AppState } from 'store'
import { Store } from 'redux'

export interface ThemeState {
  screenSize: ScreenSizes
}
const InitialState: ThemeState = {
  screenSize: 'xs'
}

export type ScreenSizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface SetScreenSize {
  type: 'SET_SCREEN_SIZE',
  screenSize: ScreenSizes
}

type ThemeAction = SetScreenSize

export default (state: ThemeState = InitialState, action: ThemeAction) => {
  if (action.type === 'SET_SCREEN_SIZE') {
    if (['xxs', 'xs', 'sm', 'md', 'lg', 'xl'].indexOf(action.screenSize.trim()) === -1) {
      return state
    }
    return { ...state, screenSize: action.screenSize }
  }
  return state
}

export function setScreenSize (size: ScreenSizes, store: Store<AppState>) {
  store.dispatch({
    type: 'SET_SCREEN_SIZE',
    screenSize: size
  })
}
