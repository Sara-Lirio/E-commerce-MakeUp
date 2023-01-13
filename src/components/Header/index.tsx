import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logos/make_up-sf.png'
import InputSearch from '../Inputs/InputSearch'
import UserField from '../UserField'
import { BsCart2 } from "react-icons/bs";

const HeaderStyle = styled.header`
    display: flex;
    justify-content:space-around;
    align-items:center;
    padding: .3em 2em;
    margin-right:2em;
    
    img {
        width: 13em;
        margin-left:.8em;
    }

    section {
        background-color: var(--cinza-color);
        width: 2.7em;
        height: 2.7em;
        border-radius: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        color: var(--grafite-color);
    }

    section:hover{
        background-color: var(--bege-color);
    }
    
`

const Header = () => {
    return (
        <HeaderStyle>
            <figure>
                <img src={Logo} />
            </figure>
            <InputSearch placeholder='Pesquise aqui'/>
            <UserField account='Minha Conta'
            stateAccount='Entre ou Cadastre-se'/>
            {/* <Link to='/perfil'> */}
            <section>
                <BsCart2 size={25}/>
            </section>
            {/* </Link> */}
        </HeaderStyle>
    )
}

export default Header