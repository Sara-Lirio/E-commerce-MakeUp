import React from 'react'
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

    .linkCadastre{
        text-decoration: none;
        color: var(--grafite-color);
        padding-left: .2em;
        font-weight: 700
    }

    label{
        font-weight: 600;
    }
`

const Login = () => {
    return (
        <StyledLogin>
            <InputMain textLabel='E-mail'
                tipo='primario' type='email'
                placeholder='seuemail@email.com.br' />
            <InputMain textLabel='Senha'
                tipo='primario' type='password'
                placeholder='********' />
            <p className='esqueciSenha'>Esqueci minha senha</p>
            <ButtonPrimary text='Login' />
            <p>Não possue conta? 
                <Link to='/cadastre-se'
                className='linkCadastre'
                >Cadastre-se</Link>
            </p>
        </StyledLogin>
    )
}

export default Login