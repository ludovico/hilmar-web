import { ScreenSizes, setScreenSize } from 'store/ducks/theme'

interface Query {
  size: number,
  title: string
}

export default store => (queries: Query[] = []) => {
  if (!window.matchMedia) {
    return
  }

  const sortedQueries = queries.sort((a, b) => a.size - b.size)

  // q = { size: Number, title: string }
  sortedQueries.forEach((q, index) => {
    const queryString = index
      ? (index === sortedQueries.length - 1
        ? '(min-width: ' + sortedQueries[index - 1].size + 'px)'
        : '(min-width: ' + sortedQueries[index - 1].size + 'px) and (max-width: ' + q.size + 'px)')
      : '(max-width: ' + q.size + 'px)'

    const mql = window.matchMedia(queryString)
    console.log(queryString)

    mql.addListener(mediaQueryList => {
      if (mql.matches) {
        setScreenSize(q.title as ScreenSizes, store)
      }
    })
    if (mql.matches) {
      setScreenSize(q.title as ScreenSizes, store)
    }
  })
}
