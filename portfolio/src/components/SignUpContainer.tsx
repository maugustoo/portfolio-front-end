import React, { useState } from 'react'
import BasicInput from '../atoms/BasicInput';
import './SignUpContainer.css'
import CustomButton from '../atoms/CustomButton'


const SignUpContainer = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event: any) => {
        console.log(username, password)
    }


    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
                <BasicInput
                    titleClass="container-title-text"
                    type="input"
                    inputName="Usuario"
                    name="username"
                    setValue={setUsername}
                />
                <BasicInput
                    titleClass="container-title-text"
                    type="password"
                    inputName="Senha"
                    name="password"
                    setValue={setPassword}
                />
                <CustomButton
                    name="Entrar"
                    type="button"
                    linkTo="/about"
                    handleClick={handleSubmit}
                >
                </CustomButton>
            </form>
        </div>
    )
}

export default SignUpContainer;