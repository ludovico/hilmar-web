import * as React from 'react'

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
      <h1>{'Hello, ' + name + '!'}</h1>
    </div>
  )
}
