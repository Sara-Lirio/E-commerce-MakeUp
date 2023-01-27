import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logos/make_up-sf.png'
import InputSearch from '../Inputs/InputSearch'
import UserField from '../UserField'
import { BsCart2 } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffCanvasHome from '../OffCanvas-CardHome'
import CloseButton from 'react-bootstrap/CloseButton';
import Toast from 'react-bootstrap/Toast'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: column;
   
.headerMain {
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 8em;
}

h2{
    font-size: 16px;
    margin: .8em;
    color: #FFF;
    letter-spacing: 1px;
}

.toast-header {
    background-color: transparent;
    padding: 0
}

.btn-close {
    background-color: transparent;
}

.btn-close:hover {
    background-color: #d9989c;
}

.headerCoupon {
    font-size: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #E7A6AA;
    width: 100%;
    border-radius: 0;
    border-color: transparent;
}

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

button:hover {
    background-color: var(--bege-color);
}
`

const Header = () => {
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [showA, setShowA] = useState(true);

    const handleCloseOffCanvas = () => setShowOffCanvas(false)
    const handleShowOffCanvas = () => setShowOffCanvas(true)

    const toggleShowA = () => setShowA(!showA);

    return (
        <HeaderStyle>
            <Row>
                <Col className="mb-2">
                    <Toast show={showA} onClose={toggleShowA} className='headerCoupon'>
                        <Toast.Header>
                            <h2> 1ª compra? Ganhe 40% de desconto. #PRIMEIRACOMPRA.</h2>
                        </Toast.Header>
                    </Toast>
                </Col>
            </Row>
            <section className='headerMain'>
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
            </section>
        </HeaderStyle>
    )
}

export default Header