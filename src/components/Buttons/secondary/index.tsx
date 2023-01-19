import React from 'react'
import styled from 'styled-components'

export interface ButtonSecundaryProps {
    text?: string
}

const StyleButton = styled.button`
    background-color: transparent;
    border: 1px solid var(--grafite-color);
    font-family: var(--font-overpass);
    text-transform: uppercase;
    color: var(--grafite-color);
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 2px;
    padding: .3em 1.7em;
    cursor:pointer;

    -webkit-box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.2);
	-moz-box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.2);
	box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.2);

    &:hover {
        background-color: var(--grafite-color);
        color: var(--branco-color);
    }
`

const ButtonSecondary = ({text}:ButtonSecundaryProps) => {
  return (
    <StyleButton>{text}</StyleButton>
  )
}

export default ButtonSecondary