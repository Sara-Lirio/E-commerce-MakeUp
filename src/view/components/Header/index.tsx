import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import InputSearch from '../Inputs/InputSearch'

import Logo from '../../../assets/logos/make_up-sf.png'
import ToastHeader from '../ToastHeader'
import UserField from '../UserField'

const HeaderStyle = styled.header`
   
`
const HeaderMain = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-top: 1em;

.containerImageLogo{
    width:80%;
    display:flex;
    justify-content: center;
    align-items: center;
}

@media (min-width: 768px) and (max-width: 1024px) {
    .imageLogo {
        width: 70%;
    }
    
  }


`

const Header = () => {
    return (
        <HeaderStyle>
            <ToastHeader />
            <HeaderMain>
                <UserField account='minha conta'
                stateAccount='entre ou cadastre-se' />
                <Link to='/' className='containerImageLogo'>
                    <figure >
                        <img src={Logo} className='imageLogo' />
                    </figure>
                </Link>
                <InputSearch placeholder='Pesquise aqui' />
            </HeaderMain>
        </HeaderStyle>
    )
}

export default Header