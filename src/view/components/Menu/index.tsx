import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { TbMenu2 } from "react-icons/tb";

const ContainerMenu = styled.div`
    width: 100%;
`

const ContainerMenuMobile = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    margin: 1em; 

        .buttonToMenu {
            color:gray;
            font-size: 2em;
            padding: .1em;
        }

        .containerMenuOptions{
           text-align:center;
           margin
           height: 8em;
           display:flex;
           flex-direction: column;
           justify-content: space-between;
        }

        #basic-nav-dropdown{
            color: gray;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 3px;
        }
`

const Menu = () => {
    const [showMenuMobile, setShowMenuMobile] = useState(false);
    const navigate = useNavigate();

    const menuMobile = () => { setShowMenuMobile((show) => !show) };

    return (
        <ContainerMenu>
            <ContainerMenuMobile onClick={menuMobile}>
                <TbMenu2 className='buttonToMenu' />
                {showMenuMobile && (
                    <section className='containerMenuOptions'>
                        <NavDropdown title="Maquiagem" id="basic-nav-dropdown">
                            {/* <section className='makes'>
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
                    </section>  */}
                        </NavDropdown>
                        <NavDropdown title="Esmaltes" id="basic-nav-dropdown">

                        </NavDropdown>
                        <NavDropdown title="Promos" id="basic-nav-dropdown">

                        </NavDropdown>
                        <NavDropdown title="Marcas" id="basic-nav-dropdown">
                            {/* <section className='makes'>
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
                    </section>  */}
                        </NavDropdown>
                    </section>
                )}
            </ContainerMenuMobile>
        </ContainerMenu>
    )
}

export default Menu