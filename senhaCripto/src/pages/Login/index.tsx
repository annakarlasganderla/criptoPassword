import './styles.css';
import * as React from 'react';
import { StyledTextField } from '../../components/TextField';

export function Login() {

    const [login, setLogin] = React.useState({
        email: '',
        senha: ''
    });

    return (
        <div className='container'>
            <div className='login-container'>

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
                    <button onClick={() => window.location.href = "lista"}>Entrar</button>
                </div>

                <p>Não tem uma conta? <a href="cadastro">Cadastre-se</a></p>
            </div>

        </div>
    )
}







