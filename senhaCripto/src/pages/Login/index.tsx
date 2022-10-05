import './styles.css';
import { LoginTypes } from './login.types';
import * as React from 'react';
import { StyledTextField } from '../../components/TextField';
import { useState } from 'react';
import UserApi from '../../services/user.api';
import { Navigate } from "react-router-dom";


export function Login() {
    const loginApi = new UserApi();

    const [login, setLogin] = useState<LoginTypes>({
        login: '',
        password: '',
        id: '',
        name: '',
    });

    console.log(login)

    const handleLogin = () => {
        loginApi._login(login)
            .then((response: any) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='container'>
            <div className='login-container'>

                <StyledTextField
                    label="E-mail"
                    variant="outlined"
                    onChange={(e) =>
                        setLogin({
                            ...login,
                            login: e.target.value
                        })}
                />

                <StyledTextField
                    label="Senha"
                    variant="outlined"
                    onChange={(e) =>
                        setLogin({
                            ...login,
                            password: e.target.value
                        })}
                />

                {login && (
                    <Navigate to="/lista" replace={true} />
                )}

                <div>
                    <button onClick={() => { handleLogin() }}>Entrar</button>
                </div>

                <p>Não tem uma conta? <a href="cadastro">Cadastre-se</a></p>
            </div>
        </div>
    )
}

