import React from 'react'
import styled, { css } from 'styled-components'

export interface ButtonPrimaryProps {
    text?: string
    disabled?: boolean
    tipo?: 'dark' | 'light'
    onClick ?: () => void
}

const StyleButton = styled.button<ButtonPrimaryProps>`
    font-weight:700;
    font-family: var(--font-overpass);
    text-transform: uppercase;
    border:none;
    border-radius:11px;
    padding: .5em 1.8em;
    font-size: 18px;
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

    ${(props: ButtonPrimaryProps) => props.tipo === 'dark' ? css`
        background-color: var(--grafite-color);
        color: var(--branco-color);
    `: css`
    background-color: var(--bege-color);
    color: var(--grafite-color);
    `}
`

const ButtonPrimary = ({ text, disabled, tipo = 'dark', onClick }: ButtonPrimaryProps) => {
    return (
        <StyleButton tipo={tipo} 
        disabled={disabled}
        onClick={onClick}
        >{text}</StyleButton>
    )
}

export default ButtonPrimary