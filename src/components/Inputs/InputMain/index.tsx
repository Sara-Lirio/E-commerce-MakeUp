import React from 'react'
import styled from 'styled-components'

export interface InputProps {
    placeholder?: string,
    textLabel?: string,
}

const Fieldset = styled.fieldset`
    border: transparent;
    font-family: var(--font-overpass);

    label {
        margin-right: 1rem;
        color: var(--grafite-color)
    }

    input {
        border:transparent;
        border-bottom: var(--gelo-color) .14em solid;
        font-family: var(--font-overpass);
        text-align: center;
    }

`

const InputMain = ({placeholder, textLabel}:InputProps) => {
  return (
    <Fieldset>
        <label>{textLabel}</label>
        <input placeholder={placeholder} />
    </Fieldset>
  )
}

export default InputMain