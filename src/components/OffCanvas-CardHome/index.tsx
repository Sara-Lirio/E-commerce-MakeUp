import React from 'react'
import styled from 'styled-components'
import ButtonSecondary from '../Buttons/secondary'
import Offcanvas from 'react-bootstrap/Offcanvas';

const StyledOffCanvas = styled.section`
    color: var(--grafite-color);
    font-family: var(--font-overpass);
    display:flex;
    flex-direction: column;
    align-items: center;
    
    .buttonClose {
      border:none;
      background-color:transparent;
      margin-left: 20em;
    }

    h2 {
      font-weigth: 400;
      text-transform:uppercase;
      font-size: 18px;
      text-align: center;
      border-bottom: 1px solid var(--cinza-gelo);
      margin: 1em;
    }

    .offcanvas-header {
      margin:0
    }

    .btn-close {
      margin-left: 20em;
      margin-top: .5em
    }

    div {
      text-align: center;
      margin: 3em;
    }
`

const OffCanvasHome = () => {
  return (
    <StyledOffCanvas>
      <Offcanvas.Header closeButton>
    
      </Offcanvas.Header>
      <h2>Meu Carrinho</h2>
      <div>
        <p>VOCÊ NÃO TEM NENHUM PRODUTO NO CARRINHO<br /><br />
          Quando você escolher seus produtos, mostraremos tudo aqui.</p>
      </div>
      <ButtonSecondary text='Ver carrinho' />

    </StyledOffCanvas>
  )
}

export default OffCanvasHome