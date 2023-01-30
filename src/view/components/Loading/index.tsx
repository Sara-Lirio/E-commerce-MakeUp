import React from 'react'
import Load from '../../../assets/gifs/loading.gif'
import styled from 'styled-components'

const LoadStyled = styled.div`
width: 20em;
display:flex;
justify-content: center;
`

const Loading = () => {
  return (
    <LoadStyled>
<img src={Load} />
    </LoadStyled>
  )
}

export default Loading