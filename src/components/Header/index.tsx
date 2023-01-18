import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logos/make_up-sf.png'
import InputSearch from '../Inputs/InputSearch'
import UserField from '../UserField'
import { BsCart2 } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffCanvasHome from '../OffCanvas-CardHome'

const HeaderStyle = styled.header`
    display: flex;
    justify-content:space-around;
    align-items:center;
    padding: .3em 2em;
    margin: 0 5.6em;
    
    img {
        width: 13em;
    }

    button {
        background-color: var(--cinza-color);
        width: 2.7em;
        height: 2.7em;
        border: none;
        border-radius: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        color: var(--grafite-color);
    }

    button:hover{
        background-color: var(--bege-color);
    }
`

const Header = () => {
    const [showOffCanvas, setShowOffCanvas] = useState(false);

    const handleCloseOffCanvas = () => setShowOffCanvas(false)
    const handleShowOffCanvas = () => setShowOffCanvas(true)

    return (
        <HeaderStyle>
            <Link to='/'>
                <figure>
                    <img src={Logo} />
                </figure>
            </Link>
            <InputSearch placeholder='Pesquise aqui' />
            <UserField account='Minha Conta'
                stateAccount='Entre ou Cadastre-se' />

            <button onClick={handleShowOffCanvas}>
                <BsCart2 size={25} />
            </button>

            <Offcanvas show={showOffCanvas} onHide={handleCloseOffCanvas} placement='end'>
                <OffCanvasHome />
            </Offcanvas>

        </HeaderStyle>
    )
}

export default Header