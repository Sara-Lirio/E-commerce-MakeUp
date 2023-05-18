import React from 'react'
import styled from 'styled-components'
import { VscSearch } from "react-icons/vsc";

export interface InputProps {
  placeholder?: string,
}

const Fieldset = styled.fieldset`
  border: .1em solid gray;
  border-radius: .4em;
  padding: .3em 1em .2em 2em;
  font-family: var(--font-overpass);
  color: var(--grafite-color);
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size:.8em;
  margin: 0 .8em;

  input{
    border:none;
    outline:none;
    color: var(--grafite-color);
    font-family: var(--font-overpass);
  }

  @media (min-width: 425px) and (max-width: 767px) {
    margin: 0 1em;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 1.5em;
  }
}
`

const InputSearch = ({placeholder}:InputProps) => {
  return (
    <Fieldset>
      <input placeholder={placeholder}/>
      <VscSearch/>
    </Fieldset>
  )
}

export default InputSearch