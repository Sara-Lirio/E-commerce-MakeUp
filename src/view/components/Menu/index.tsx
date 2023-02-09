import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
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
    max-width: 30em;
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
    const navigate = useNavigate();

    return (
        <ContainerMenu>
            <ul>
                <NavDropdown title="Maquiagem" id="basic-nav-dropdown">
                    <section className='makes'>
                        <div className='column1'>
                            <NavDropdown.Item>
                                <div onClick={() => navigate(`/products/blush`)}>Blush</div>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <div onClick={() => navigate(`/products/bronzer`)}>Bronzer</div>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <div onClick={() => navigate(`/products/eyebrow`)}>Eyebrow</div>
                            </NavDropdown.Item>
                            <NavDropdown.Item>Delineadores</NavDropdown.Item>
                            <NavDropdown.Item>Sombras</NavDropdown.Item>
                            <NavDropdown.Item>Corretivos</NavDropdown.Item>
                        </div>
                        <div className='column2'>
                            <NavDropdown.Item>Base</NavDropdown.Item>
                            <NavDropdown.Item>Pó Mineral</NavDropdown.Item>
                            <NavDropdown.Item>Lápis de Boca</NavDropdown.Item>
                            <NavDropdown.Item>Batons</NavDropdown.Item>
                            <NavDropdown.Item>Gloss</NavDropdown.Item>
                            <NavDropdown.Item>Mascaras</NavDropdown.Item>
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
                            <NavDropdown.Item>Almay</NavDropdown.Item>
                            <NavDropdown.Item>Alva</NavDropdown.Item>
                            <NavDropdown.Item>Anna Sui</NavDropdown.Item>
                            <NavDropdown.Item>Annabelle</NavDropdown.Item>
                            <NavDropdown.Item>Benefit</NavDropdown.Item>
                            <NavDropdown.Item>Boosh</NavDropdown.Item>
                        </div>
                        <div className='column2'>
                            <NavDropdown.Item>Burt's Bees</NavDropdown.Item>
                            <NavDropdown.Item>Butter London</NavDropdown.Item>
                            <NavDropdown.Item>C'est moi</NavDropdown.Item>
                            <NavDropdown.Item>Cargo Cosmetics</NavDropdown.Item>
                            <NavDropdown.Item>China Glaze</NavDropdown.Item>
                            <NavDropdown.Item>Clinique</NavDropdown.Item>
                        </div>
                    </section>
                    <section className='verTudo'>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <div onClick={() => navigate(`/products`)}>Ver mais</div>
                        </NavDropdown.Item>
                    </section>
                </NavDropdown>
            </ul>
        </ContainerMenu>
    )
}

export default Menu