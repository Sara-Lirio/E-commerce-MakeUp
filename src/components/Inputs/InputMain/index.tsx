import React from 'react'
import styled, { css } from 'styled-components'

export interface InputProps {
    placeholder?: string,
    textLabel?: string,
    tipo?: 'primario'
}

const Fieldset = styled.fieldset<InputProps>`
    border: transparent;
    font-family: var(--font-overpass);

    label {
        margin-right: 1rem;
    }

    input {
        border:transparent;
        border-bottom: var(--gelo-color) .14em solid;
        font-family: var(--font-overpass);
        text-align: center;
        background-color: transparent;
        width: 20em;
    }

   

    input:focus, select:focus {
        outline: 0;
    }

    ${(props: InputProps) => props.tipo === 'primario'
        ? css`
        label {
            color: var(--grafite-color);
        }       
        `
        : css`
        label, input {
            color: var(--gelo-color);
        }  

        input::placeholder {
            color:  var(--cinza-color);
          }

      
        `
    }

`

const InputMain = ({tipo, placeholder, textLabel}:InputProps) => {
  return (
    <Fieldset tipo={tipo}>
        <label>{textLabel}</label>
        <input placeholder={placeholder} />
    </Fieldset>
  )
}

export default InputMain