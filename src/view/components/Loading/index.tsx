import React from 'react'
import Load from '../../../assets/gifs/loading.gif'
import styled from 'styled-components'

const LoadStyled = styled.div`
display:flex;
justify-content: center;
align-items: center;
height:60vh; 
img {
  width: 6em;
}
`

const Loading = () => {
  return (
    <LoadStyled>
      <img src={Load} />
    </LoadStyled>
  )
}

export default Loading