import React from 'react'

import CustomButton from '../atoms/CustomButton'


const SignUpContainer = () => {
    return (
        <div className="container">
            <form>
                <h1>Usuário</h1>
                <input type="text"></input>
                <h1>Senha</h1>
                <input type="password"></input>
                <CustomButton name="Entrar" />
            </form>
        </div>
    )
}

export default SignUpContainer;