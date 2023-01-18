import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../../components/Buttons/primary'
import InputMain from '../../components/Inputs/InputMain'
import { Link } from 'react-router-dom'
import Banner from '../../assets/images/banner_register.png'

const StyledRegistration = styled.main`
   
    display:flex;
    justify-content: space-between;
    margin: 2em 16em;

    section {
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-content:stretch;
        height: 38em;
        margin-top: 2em;
    }

    label {
        font-weight: 600;
    }

    .linkLogin {
        text-decoration: none;
        color: var(--grafite-color);
        padding-left: .2em;
        font-weight: 700
    }

    h3 {
        margin-bottom: 1.4em;
        color: var(--grafite-color);
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 2px;
        margin-left: 7em;
    }

    div{
        margin-left: 8em;
    }


    div p {
        margin-top: 1em
    }
`

const Registration = () => {
    return (
        <StyledRegistration>
            <img src={Banner} />
            <section>
                <h3>Cadastre-se</h3>
                <InputMain textLabel='Nome'
                    placeholder='Digite o seu nome completo'
                    tipo='primario' />
                <InputMain textLabel='Endereço'
                    placeholder='Digite o sua rua/av. e número'
                    tipo='primario' />
                <InputMain textLabel='Complemento'
                    placeholder='Apto/Casa, bloco'
                    tipo='primario' />
                <InputMain textLabel='CEP'
                    placeholder='Digite o seu CEP'
                    tipo='primario' /><br />
                <InputMain textLabel='E-mail'
                    placeholder='seuemail@email.com'
                    tipo='primario' />
                <InputMain textLabel='Senha'
                    placeholder='********'
                    tipo='primario'
                    type='password' />
                <InputMain textLabel='Confirmar senha'
                    placeholder='********'
                    tipo='primario'
                    type='password' /><br />
                <div>
                <ButtonPrimary text='Cadastrar' tipo='' />

                <p>Já possue conta?
                    <Link to='/login'
                        className='linkLogin'>
                        Entrar
                    </Link>
                </p>
                </div>
            </section>

        </StyledRegistration>
    )
}

export default Registration