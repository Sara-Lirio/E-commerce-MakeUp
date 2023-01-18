import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../../components/Buttons/primary'
import InputMain from '../../components/Inputs/InputMain'

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
`

const Login = () => {
  return (
    <StyledLogin>
        <InputMain textLabel='E-mail' 
        tipo='primario' type='email'
        placeholder='seuemail@email.com.br'/>
         <InputMain textLabel='Senha' 
        tipo='primario' type='password'
        placeholder='********'/>
        <p className='esqueciSenha'>Esqueci minha senha</p>
        <ButtonPrimary text='Login' />
        <p>Não possue conta? Cadastra-se</p>
    </StyledLogin>
  )
}

export default Login