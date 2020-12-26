import React, { useRef } from 'react'

const InputText = ({ type, name, text, placeholder, value, event }) => {
  const input = useRef(value)
  const change = () => {
    event({
      name: name,
      value: input.current.value
    })
  }
  return (
    <div className="form-group">
      <label htmlFor={name}>{text}</label>
      <input type={type} className="form-control" id={name} placeholder={placeholder} ref={input} value={value} onChange={change} />
    </div>
  )
}

export default InputText