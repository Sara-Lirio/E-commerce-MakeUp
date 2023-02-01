import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled from 'styled-components'
import ButtonSecondary from '../Buttons/secondary'

export interface CardProductsProps {
    id?: number
    image_link?: string
    category?: string
    name?: string
    price?: number
    onClick?: () => void
    
}

const StyleCardProducts = styled.div`
    font-family: var(--font-overpass);
    width:10em;
    height: 23em;
    display:flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        max-width: 10em;
        max-height:10em;
        width: auto;
        height: auto;
        cursor: pointer;
        transition: 9ms;
        margin: auto;
        display: block;
    }

    img:hover {
        transform: scale(1.1);
        transition: 1s
    }

    p {
        color: #B4A7A7;
        margin-left: .5em;
        font-size:14px;
    }

    h2, h3 {
        color: var(--grafite-color);
        text-align: center;
    }

    h3 {
        cursor: pointer;
        font-weight: 600;
        font-size: 18px;
    }

    h2 {
        font-weight: 300;
        margin-bottom: .5em;
        font-size: 19px;
    }
`

const CardProduct = ({ id, image_link, category, name, price, onClick}: CardProductsProps) => {
    return (
        <StyleCardProducts key={id}>
            <figure>
                <img src={image_link} />
            </figure>
            <p>{category}</p>
            <h3>{name}</h3>
            <h2>$ {price}</h2>
                <ButtonSecondary
                    onClick={onClick}
                    text='ver mais' />
        </StyleCardProducts>
    )
}

export default CardProduct