import React from 'react'
import styled from 'styled-components'

const ContainerMenu = styled.div`
    background-color: var(--grafite-color);
    color: var(--gelo-color);
    font-family: var(--font-overpass);
    text-transform: uppercase;
    margin: 0 5em;
    padding: .5em 0;
    
    ul {
        display:flex;
        justify-content: space-around;
        align-items:center;
        margin: 0 4em;
    }

    li{
        list-style-type: none; 
        font-size: 14px;
        padding-right: 2em;
        cursor: pointer;
    }

    li:hover{
        color: var(--bege-color);
    }
`

const Menu = () => {
  return (
    <ContainerMenu>
        <ul>
            <li>Maquiagem</li>|
            <li>Esmaltes</li>|
            <li>Promos</li>|
            <li>Marcas</li>
        </ul>
    </ContainerMenu>
  )
}

export default Menu