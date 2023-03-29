import React from 'react'

export const SnackBar = ({
  show
}) => {
  return (
    <div id='snack-bar' className={show ? 'snack-bar-visible' : ''}>
      email copied!
    </div>
  )
}