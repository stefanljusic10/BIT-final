import React from 'react'
import './button.scss'

const Button = ({ name, btnClass, method, isDisabled }) => {
  return (
    <button disabled={isDisabled} className={btnClass} onClick={method}>
      {name}
    </button>
  )
}

export default Button