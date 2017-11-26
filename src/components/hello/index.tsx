import * as React from 'react'
import * as s from './hello.css'

export default ({ name, className }) => {
  if (name === 'Roar') {
    return (
      <div className={className}>
        <h1>{'Go to bed, ' + name + '...'}</h1>
      </div>
    )

  }

  return (
    <div className={className}>
      <h1 className={[s.title, 'float-left'].join(' ')}>{'Hello, ' + name + '!'}</h1>
    </div>
  )
}
