import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../../assets/images/bg_cadastro.png'
import ButtonPrimary from '../Buttons/primary'
import InputMain from '../Inputs/InputMain'

const StyledForm = styled.section`
    background-image: url(${backgroundImage});
    background-size: cover;
    font-family: var(--font-overpass);
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 3em 8em;

    h3 {
        color: var(--gelo-color);
        text-transform: uppercase;
        padding-bottom: 2em;
        font-size: 20px;
        letter-spacing: 2px;
        font-weight: 600;
    }

    div{
        display:flex;
        justify-content: space-between;
    }
`

const RegistrationForm = () => {
    return (
        <StyledForm>
            <h3>Cadastre-se  e  Receba  Novidades!</h3>
            <div>
                <InputMain
                    textLabel='Nome'
                    placeholder='Digite o seu nome' />

                <InputMain
                    textLabel='E-mail'
                    placeholder='Digite o seu E-mail' />

                <ButtonPrimary text='Cadastrar' />
            </div>
        </StyledForm>
    )
}

export default RegistrationForm