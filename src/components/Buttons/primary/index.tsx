import React from 'react'
import styled, { css } from 'styled-components'

export interface ButtonPrimaryProps {
    text?: string
    disabled?: boolean
    tipo?: 'dark'
}

const StyleButton = styled.button<ButtonPrimaryProps>`
   
    font-weight:600;
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

    ${(props: ButtonPrimaryProps) => props.tipo === 'dark' ? css`
        background-color: var(--grafite-color);
        color: var(--branco-color);
    `: css`
    background-color: var(--bege-color);
    color: var(--grafite-color);
    `}

`

const ButtonPrimary = ({ text, disabled, tipo = 'dark' }: ButtonPrimaryProps) => {
    return (
        <StyleButton tipo={tipo} disabled={disabled}>{text}</StyleButton>
    )
}

export default ButtonPrimary