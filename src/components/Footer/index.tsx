import React from 'react'
import LogoFooter from '../../assets/logos/MK_logo.png'
import styled from 'styled-components'
import { GrFacebookOption, GrInstagram, GrTwitter, GrMail } from "react-icons/gr";

const StyledFooter = styled.footer`
    background-color: var(--gelo-color);
    padding: 1em 8em;
    font-family: var(--font-overpass);
    color: var(--grafite-color);
    display:flex;
    justify-content: space-between;
   
    img {
        width: 12em;
    }

    .products li{
        padding-top: .6em
    }

    .brands li {
        padding-top: .3em;
    }

    .socialMedia{
        padding-left: 1em;
        color: #867B7B;
    }

    h3 {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 15px;
        padding-top: 1em;
    }

    li { 
        list-style-type: none;
        font-weight: 300;
        font-size: 12px;
        cursor:pointer;
     }

     li:hover{
        color: var(--bege-color);
    
     }
`

const Footer = () => {
    return (
        <StyledFooter>
            <figure>
                <img src={LogoFooter} />
            </figure>
            <div>
                <h3>Produtos</h3>
                <ul className='products'>
                    <li>MAQUIAGEM</li>
                    <li>ESMALTES</li>
                    <li>PROMOS</li>
                    <li>MARCAS</li>
                </ul>
            </div>
            <div>
                <h3>Marcas</h3>
                <ul className='brands'>
                    <li>alway</li>
                    <li>alva</li>
                    <li>anna sui</li>
                    <li>annabelle</li>
                    <li>benefit</li>
                </ul>
            </div>
            <div>
                <ul className='brands'><br/>
                    <li>boosh</li>
                    <li>burt's bees</li>
                    <li>butter london</li>
                    <li>c'est moi</li>
                    <li>+ ver mais</li>
                </ul>
            </div>
            <div>
                <h3>Nossas redes</h3>
                <div className='socialMedia'>
                <GrFacebookOption/> <GrInstagram/> <GrTwitter/> <GrMail/> 
            </div>
                <h3>Atendimento ao Cliente</h3>
                <ul>
                    <li>Chat online</li>
                    <li>Seg à Sex - 9h às 18h</li>
                    <li>Sáb - 9h às 15h</li>
                </ul>
            </div>
        </StyledFooter>
    )
}

export default Footer