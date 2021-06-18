import React, { useState } from 'react'
import BasicInput from '../atoms/BasicInput';

import About from './About'
import CustomButton from '../atoms/CustomButton'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const SignUpContainer = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event: any) => {
        console.log(username, password)
    }

    return (
        <Router>
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

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}

export default SignUpContainer;