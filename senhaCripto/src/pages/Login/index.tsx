import './styles.css';
import { LoginTypes } from '../../utils/login.types';
import * as React from 'react';
import { StyledTextField } from '../../components/TextField';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api';


export function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState<LoginTypes>({
        login: '',
        password: '',
        id: '',
        name: '',
    });

    const makeLogin = () => {
        api.post('auth/login', user)
            .then((response) => { alert('login successful'); localStorage.setItem("myToken", response.data.token); navigate('/lista') })
            .catch(() => alert('login failed'));
    }

    return (
        <div className='container'>
            <div className='login-container'>

                <StyledTextField
                    label="Login"
                    variant="outlined"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            login: e.target.value
                        })}
                />

                <StyledTextField
                    label="Senha"
                    variant="outlined"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            password: e.target.value
                        })}
                />

                <div>
                    <button onClick={() => makeLogin()}>Entrar</button>
                </div>

                <p>Não tem uma conta? <a href="cadastro">Cadastre-se</a></p>
            </div>
        </div>
    )
}

