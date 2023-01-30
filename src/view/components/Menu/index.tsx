import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components'

const ContainerMenu = styled.div`
    background-color: var(--grafite-color);
    color: var(--gelo-color);
    font-family: var(--font-overpass);
    text-transform: uppercase;
    margin-bottom: 1em;
    padding: .5em 2em;
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
    height: 15em;
    width: 24em;
    display:flex;
    padding: 1.3em 2em;
    flex-direction: column;
    align-items: center;
    margin-top: .3em;
}

.makes {
    display:flex;
    width: 100%;
    justify-content: space-between
}

.dropdown-divider{
    border-top: 1px solid var(--gelo-color);
    width: 18em
}

.verTudo{
    text-align: center;
}

.dropdown-item {
    color: var(--gelo-color);
    font-size: 13px;
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
                    <section className='makes'>
                        <div className='column1'>
                            <NavDropdown.Item href="/blush">Blush</NavDropdown.Item>
                            <NavDropdown.Item href="/bronzer">Bronzer</NavDropdown.Item>
                            <NavDropdown.Item href="/eyebrow">Eyebrow</NavDropdown.Item>
                            <NavDropdown.Item href="/delineadores">Delineadores</NavDropdown.Item>
                            <NavDropdown.Item href="/sombras">Sombras</NavDropdown.Item>
                            <NavDropdown.Item href="/corretivos">Corretivos</NavDropdown.Item>
                        </div>
                        <div className='column2'>
                            <NavDropdown.Item href="/bases">Base</NavDropdown.Item>
                            <NavDropdown.Item href="/pomineral">Pó Mineral</NavDropdown.Item>
                            <NavDropdown.Item href="/lapisboca">Lápis de Boca</NavDropdown.Item>
                            <NavDropdown.Item href="/batons">Batons</NavDropdown.Item>
                            <NavDropdown.Item href="/gloss">Gloss</NavDropdown.Item>
                            <NavDropdown.Item href="/mascaras">Mascaras</NavDropdown.Item>
                        </div>
                    </section>
                    <section className='verTudo'>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/produtos">Ver tudo</NavDropdown.Item>
                    </section>
                </NavDropdown>|
                <li>Esmaltes</li>|
                <li>Promos</li>|
                <NavDropdown title="Marcas" id="basic-nav-dropdown">
                    <section className='makes'>
                        <div className='column1'>
                            <NavDropdown.Item href="/blush">Almay</NavDropdown.Item>
                            <NavDropdown.Item href="/bronzer">Alva</NavDropdown.Item>
                            <NavDropdown.Item href="/eyebrow">Anna Sui</NavDropdown.Item>
                            <NavDropdown.Item href="/delineadores">Annabelle</NavDropdown.Item>
                            <NavDropdown.Item href="/sombras">Benefit</NavDropdown.Item>
                            <NavDropdown.Item href="/corretivos">Boosh</NavDropdown.Item>
                        </div>
                        <div className='column2'>
                            <NavDropdown.Item href="/bases">Burt's Bees</NavDropdown.Item>
                            <NavDropdown.Item href="/pomineral">Butter London</NavDropdown.Item>
                            <NavDropdown.Item href="/lapisboca">C'est moi</NavDropdown.Item>
                            <NavDropdown.Item href="/batons">Cargo Cosmetics</NavDropdown.Item>
                            <NavDropdown.Item href="/gloss">China Glaze</NavDropdown.Item>
                            <NavDropdown.Item href="/mascaras">Clinique</NavDropdown.Item>
                        </div>
                    </section>
                    <section className='verTudo'>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/produtos">Ver mais</NavDropdown.Item>
                    </section>
                </NavDropdown>
            </ul>
        </ContainerMenu>
    )
}

export default Menu