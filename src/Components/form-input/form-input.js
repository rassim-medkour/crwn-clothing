import React from 'react'
import './form-input.scss'

export  function FormInput({handleChange,label,...OtherInputPropos}) {
  return (
    <div className='group'>
          <input className='form-input' {...OtherInputPropos} onChange={handleChange} />
          {
            label ?
            (<label
            className={ (OtherInputPropos.value.length ? 'shrink':'') + 'form-input-label'}>{label}</label>)
            : null
          }
    </div>
  )
}
