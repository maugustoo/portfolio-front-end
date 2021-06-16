import React from 'react'
import BasicInput from '../atoms/BasicInput';

import CustomButton from '../atoms/CustomButton'

const SignUpContainer = () => {

    const handleSubmit = (event:any)=>{
        // console.log(event.target.username.value)
        console.log(event.target.password.value)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <BasicInput
                    type="input"
                    inputName="Usuario"
                    name="username"
                />
                <BasicInput
                    type="password"
                    inputName="Senha"
                    name="password"
                />
                <CustomButton
                 name="Entrar"
                 type="submit"
                  />
            </form>
        </div>
    )
}

export default SignUpContainer;