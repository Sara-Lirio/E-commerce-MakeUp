import React from 'react'

import styled from 'styled-components'


const StyledOffCanvas = styled.section`
    color: var(--grafite-color);
    font-family: var(--font-overpass);

    h2 {
      font-weigth: 400;
      text-transform:uppercase;
      font-size: 18px;
      text-align: center;
      border-bottom: 1px solid var(--cinza-gelo);
      margin: 1em;
    }
`

const OffCanvasHome = () => {
  return (
    <StyledOffCanvas>
    <header>
      <h2>Meu Carrinho</h2>
    </header>
    </StyledOffCanvas>
  )
}

export default OffCanvasHome