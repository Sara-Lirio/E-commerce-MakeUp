import React from 'react'
import styled from 'styled-components'
import saleImage from '../../assets/images/sale.png'

const StyledCoupon = styled.section`
    font-family: var(--font-overpass);
    margin: 0 8em;
    

    figure {
        background-image: url(${saleImage});
        background-size: contain;
        background-repeat: no-repeat;
        height: 200px;
    }

    h2 {
        color: var(--grafite-color);
        text-align: center;
        font-size: 30px;
        font-weight: 400;
        padding: 1em;
    }

   

`

const CouponSection = () => {
  return (
    <StyledCoupon>
        <h2>Aproveite o desconto na sua primeira compra</h2>
        <figure>
        
        </figure>
    </StyledCoupon>
  )
}

export default CouponSection