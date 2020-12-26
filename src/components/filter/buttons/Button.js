import React from 'react'

const Button = ({ className, text, click }) => {
  return (
    <button type="button" className={`btn ${className}`} onClick={click}>{text}</button>
  )
}

export default Button