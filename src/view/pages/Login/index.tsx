import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../../components/Buttons/primary'
import InputMain from '../../components/Inputs/InputMain'
import { Link } from 'react-router-dom'

const StyledLogin = styled.main`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: var(--font-overpass);
    color: var(--grafite-color);
    height: 20em;
    margin-top: 4em;

    .esqueciSenha {
        text-decoration: underline;
        padding-left: 14em;
    }

    .linkCadastre {
        text-decoration: none;
        color: var(--grafite-color);
        padding-left: .2em;
        font-weight: 700
    }

    label {
        font-weight: 600;
    }
`

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("submit", {user, password});
        if(user === 'sara@gmail.com' && password === '123'){
            alert("Login afetuado com sucesso")
        } else {
            alert("Usuário ou senha inválido(s)")
        }
    }

    return (
        <StyledLogin>
            <InputMain textLabel='E-mail'
                tipo='primario' type='email'
                placeholder='seuemail@email.com.br' 
                value={user}
                onChange={(e)=> setUser(e.target.value)}/>
            <InputMain textLabel='Senha'
                tipo='primario' type='password'
                placeholder='********' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <p className='esqueciSenha'>Esqueci minha senha</p>
            <ButtonPrimary text='Login' 
            onClick={handleLogin}/>
            <p>Não possue conta? 
                <Link to='/cadastre-se'
                className='linkCadastre'
                >Cadastre-se</Link>
            </p>
        </StyledLogin>
    )
}

export default Login