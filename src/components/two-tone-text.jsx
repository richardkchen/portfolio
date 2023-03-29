import React from 'react'

export const TwoToneText = ({ className, text, strong }) => (
  <p className={className}>
    {text}{' '}
    <strong>{strong}</strong>
  </p>
)