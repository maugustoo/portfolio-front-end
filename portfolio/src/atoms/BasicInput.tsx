import React, { useState } from 'react';

interface BasicInputProps {
  type: string
  inputName: string
  name: string
}

const BasicInput = (props: BasicInputProps) => {

  const [username, setUsername] = useState("")

  return (
    <div className={"input-basic"}>
      <h1>
        {props.inputName}
      </h1>
      <input
         name={props.name}
         type={props.type}
         value={username}
         onChange={(e:any)=> setUsername(e.target.value)}>
      </input>
    </div>
  )
}

export default BasicInput;