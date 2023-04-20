import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import InputSearch from '../Inputs/InputSearch'

import Logo from '../../../assets/logos/make_up-sf.png'
import ToastHeader from '../ToastHeader'

const HeaderStyle = styled.header`
   
`
const HeaderMain = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin: 0 1.5em;

.containerImageLogo{
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
}

.imageLogo {
//    width: 70%;
}
`

const Header = () => {
    return (
        <HeaderStyle>
            <ToastHeader />
            <HeaderMain>
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