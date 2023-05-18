import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import InputSearch from '../Inputs/InputSearch'

import Logo from '../../../assets/logos/make_up-sf.png'
import ToastHeader from '../ToastHeader'
import UserField from '../UserField'
import Menu from '../Menu'
import { HiShoppingBag } from "react-icons/hi";

const HeaderStyle = styled.header`
    display:flex;
    flex-direction: column;
`
const HeaderMain = styled.section`
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin: .3em .8em;
    
.containerImageLogo {
    width: 70%;
    padding: 0 1em;
}

.btnShop {
    font-size: 1.5em;
    color: var(--grafite-color);
    cursor:pointer;
}

@media (min-width: 425px) and (max-width: 767px) {
    margin: .3em 1em;

    .containerImageLogo {
        padding-left: 4em;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    margin: .3em 1.5em;

    .containerImageLogo {
        width: 60%;
        padding-left: 12em;
    }   
}
`

const Header = () => {
    return (
        <HeaderStyle>
            <ToastHeader />
            <HeaderMain>
                <Menu />
                <Link to='/' className='containerImageLogo'>
                    <figure >
                        <img src={Logo} className='imageLogo' />
                    </figure>
                </Link>
                <UserField />
                <HiShoppingBag className='btnShop'/>
            </HeaderMain>
            <InputSearch placeholder='Pesquise aqui' />
        </HeaderStyle>
    )
}

export default Header