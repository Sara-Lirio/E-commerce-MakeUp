import React from 'react'
import styled from 'styled-components'
import { VscSearch } from "react-icons/vsc";

export interface InputProps {
  placeholder?: string,
}

const Fieldset = styled.fieldset`
  border: .1em solid var(--grafite-color);
  border-radius: .4em;
  padding: .2em 0 .2em 1em;
  width: 36em;
  height:2em;
  font-family: var(--font-overpass);
  color: var(--grafite-color);
  display:flex;
  justify-content: center;
  align-items: center;

  input{
    border:none;
    width: 36em;
    outline:none;
    font-size:.9em;
    color: var(--grafite-color);
    font-family: var(--font-overpass);
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