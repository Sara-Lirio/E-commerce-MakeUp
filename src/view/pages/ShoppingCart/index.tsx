import React from 'react'
import styled from 'styled-components'

const StyledShopping = styled.main`
display:flex;
margin: 2em;
justify-content: center;

h2 {
    color: var(--grafite-color);
    text-transform: uppercase;
    font-family: var(--font-overpass);
    font-size: 18px;
    letter-spacing: 2px;
    border-bottom: 1px solid var(--grafite-color);
    padding-bottom: 2em;
}
`

const ShoppingCart = () => {
  return (
    <StyledShopping>
        <h2>Meu Carrinho</h2>
    </StyledShopping>
  )
}

export default ShoppingCart