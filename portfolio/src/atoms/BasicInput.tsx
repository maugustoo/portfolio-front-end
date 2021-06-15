import React from 'react'

interface BasicInputProps {
  type: String
  value: String
  inputName: String
}

const BasicInput = (props: BasicInputProps) => {
  return (
    <div className="basic-input">
      <h1>
        {inputName}
      </h1>
      <input type={type} value={value}></input>
    </div>
  )
}

export default CustomButton;