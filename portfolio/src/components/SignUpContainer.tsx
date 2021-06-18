import React, { useState } from 'react'
import BasicInput from '../atoms/BasicInput';

import CustomButton from '../atoms/CustomButton'


const SignUpContainer = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event: any) => {
        console.log(username, password)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <BasicInput
                    type="input"
                    inputName="Usuario"
                    name="username"
                    setValue={setUsername}
                />
                <BasicInput
                    type="password"
                    inputName="Senha"
                    name="password"
                    setValue={setPassword}
                />
                <CustomButton
                    name="Entrar"
                    type="submit"
                >
                </CustomButton>
            </form>
        </div>
    )
}

export default SignUpContainer;