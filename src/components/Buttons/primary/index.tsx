import React from 'react'
import styled, { css } from 'styled-components'

export interface ButtonPrimaryProps {
    text?: string
    disabled?: boolean
}

const StyleButton = styled.button<ButtonPrimaryProps>`
    background-color: var(--grafite-color);
    color: var(--branco-color);
    font-family: var(--font-overpass);
    text-transform: uppercase;
    border:none;
    border-radius:11px;
    padding: .4em 1.5em;
    font-size: 16px;
    display:flex;
    cursor:pointer;

    &:hover {
        background-color: var(--bege-color);
    }

    ${(props: ButtonPrimaryProps) => props.disabled === true ? css`
    &:disabled {
        background-color: var(--cinza-color);
    }`: css`
    &:disabled {
        background-color: var(--grafite-color);
    }`}
`

const ButtonPrimary = ({ text, disabled }: ButtonPrimaryProps) => {
    return (
        <StyleButton disabled={disabled}>{text}</StyleButton>
    )
}

export default ButtonPrimary