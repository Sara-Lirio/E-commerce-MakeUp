import React from 'react'
import styled from 'styled-components'
import ButtonSecondary from '../Buttons/secondary'

export interface CardProductsProps {
    image_link?: string
    category?: string
    name?: string
    price?: number
}


const StyleCardProducts = styled.div`
    font-family: var(--font-overpass);
    width:10em;
    display:flex;
    flex-direction: column;

    img {
        width: 10em;
        cursor: pointer;
        transition: 9ms;
    }

    img:hover {
        transform: scale(1.1);
        transition: 1s
    }

    p {
        color: #B4A7A7;
        margin-left: .5em;
    }

    h2, h3 {
        color: var(--grafite-color);
        text-align: center;
        margin-top: .5em;
    }

    h3 {
        cursor: pointer;
        font-weight: 600;
    }

    h2 {
        font-weight: 300;
        margin-bottom: .5em;
    }
`

const CardProducts = ({ image_link, category, name, price }: CardProductsProps) => {
    return (
        <StyleCardProducts>
            <figure>
                <img src={image_link} />
            </figure>
            <p>{category}</p>
            <h3>{name}</h3>
            <h2>$ {price}</h2>
            <ButtonSecondary text='ver mais' />
        </StyleCardProducts>
    )
}

export default CardProducts