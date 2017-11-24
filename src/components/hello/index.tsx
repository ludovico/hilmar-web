import * as React from 'react'
import * as s from './hello.css'

export default ({ name }) => {
  if (name === 'Roar') {
    return (
      <div>
        <h1>{'Go to bed, ' + name + '...'}</h1>
      </div>
    )

  }

  return (
    <div>
      <h1 className={[s.title, 'float-left'].join(' ')}>{'Hello, ' + name + '!'}</h1>
    </div>
  )
}
