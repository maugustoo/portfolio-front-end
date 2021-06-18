import React, { useState } from 'react';

interface BasicInputProps {
  type: string
  inputName: string
  name: string
  setValue: any
}

const BasicInput = (props: BasicInputProps) => {

  return (
    <div className={"input-basic"}>
      <h1>
        {props.inputName}
      </h1>
      <input
         name={props.name}
         type={props.type}
         onChange={(e:any)=> props.setValue(e.target.value)}>
      </input>
    </div>
  )
}

export default BasicInput;