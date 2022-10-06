import React from 'react'
import './custom-button.scss'

export function CustomButton({children,...otherProps}) {
  return (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
  )
}
