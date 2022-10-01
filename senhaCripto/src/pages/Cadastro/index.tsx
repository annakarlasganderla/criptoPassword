import React from 'react';
import { StyledTextField } from '../../components/TextField';

import './styles.css';

export function Cadastro() {

    const [login, setLogin] = React.useState({
        email: '',
        senha: '',
        nome: ''
    });

    return (
        <div className='container'>
            <div className='login-container'>

                <StyledTextField
                    label="Nome"
                    variant="outlined"
                    onChange={(e) =>
                        setLogin({
                            ...login,
                            nome: e.target.value
                        })}
                />

                <StyledTextField
                    label="E-mail"
                    variant="outlined"
                    onChange={(e) =>
                        setLogin({
                            ...login,
                            email: e.target.value
                        })}
                />
                <StyledTextField
                    label="Senha"
                    variant="outlined"
                    onChange={(e) =>
                        setLogin({
                            ...login,
                            senha: e.target.value
                        })}
                />
                <div>
                    <button className='subscribe' onClick={() => window.location.href = "lista"}>Cadastre-se</button>
                </div>

                <div>
                    <button className='back' onClick={() => window.location.href = "login"}>
                        Voltar
                    </button>
                </div>

            </div>

        </div>
    )
}