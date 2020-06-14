import React from 'react'

function Link({ onClick, active, children }) {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="" onClick={() => {
      onClick()
    }}>{children}</a>
  )
}

export default Link
