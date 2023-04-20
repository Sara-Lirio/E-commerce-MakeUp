import React from 'react'
import styled from 'styled-components'
import { VscSearch } from "react-icons/vsc";

export interface InputProps {
  placeholder?: string,
}

const Fieldset = styled.fieldset`
  border: .1em solid gray;
  border-radius: .4em;
  padding: .3em 2em .2em 2em;
  font-family: var(--font-overpass);
  color: var(--grafite-color);
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size:.7em;
  width:100%;

  input{
    border:none;
    outline:none;
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