import React from 'react'
import './errorPage.scss'

const ErrorPage = ({ text }) => {
  return (
    <div className='errorPage'>{text}</div>
  )
}

export default ErrorPage