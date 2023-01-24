import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components'

const ContainerMenu = styled.div`
    background-color: var(--grafite-color);
    color: var(--gelo-color);
    font-family: var(--font-overpass);
    text-transform: uppercase;
    margin: 0 9em 1em 9em;
    padding: .5em 0;
    font-size: 14px;
    
    ul {
        display:flex;
        justify-content: space-around;
        align-items:center;
        margin: 0 4em;
    }

    li{
        list-style-type: none; 
       
        padding-right: 2em;
        cursor: pointer;
    }

    li:hover{
        color: var(--bege-color);
    }

.dropdown-toggle::after {
    display: none
}

.dropdown-menu.show {
    background-color: var(--grafite-color);
    
}

.dropdown-item {
    color: var(--gelo-color);
    font-size: 12px;
}

.dropdown-item:hover {
    color: var(--grafite-color);
}
`

const Menu = () => {
    return (
        <ContainerMenu>
            <ul>
                <NavDropdown title="Maquiagem" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Blush</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Bronzer</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Eyebrow</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Eyeliner</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Eyeshadow</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">Foundation</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.7">Lip liner</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.8">Lipstick</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.9">Mascara</NavDropdown.Item>
                   <NavDropdown.Divider />
                    <NavDropdown.Item href="/produtos">Ver tudo</NavDropdown.Item>
                </NavDropdown>|
                <li>Esmaltes</li>|
                <li>Promos</li>|
                <li>Marcas</li>
            </ul>
        </ContainerMenu>
    )
}

export default Menu