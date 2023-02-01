import React from 'react'
import CardProduct from '../CardProduct';
import styled from 'styled-components'
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
export interface SectionProps {
    loading?: any;
    products?: any;
    onClick?: () => void;
}

const Container = styled.main`
  margin: 2em 8em;
  
  h2 {
    text-transform: uppercase;
    color: var(--grafite-color);
    text-align: center;
    font-size: 26px;
    letter-spacing: 3px;
    margin-bottom: 1em;
  } 
`
const SectionProducts = styled.section`
  display:flex;
  justify-content: space-between;
  align-items: baseline;
    
  .buttonContainer {
    background-color: #F8F7F7;
    color: var(--cinza-color);
    border-radius: 2em;
    width: 2.3em;
    height: 2.3em;
    border:none;
    padding-right: 1.2em;
    padding-left: .7em;
    margin-right:2em;
    -webkit-box-shadow: 4px 4px 4px rgba(50, 50, 50, 0.3);
	-moz-box-shadow: 4px 4px 4px rgba(50, 50, 50, 0.3);
	box-shadow: 4px 4px 4px rgba(50, 50, 50, 0.3);
  }

   .carouselProducts {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 80%;
    background-color: #EFEFEF;
    margin: .8em auto;
    border-radius: 20px;
    padding: 2em;
   }

   .carouselProducts::-webkit-scrollbar{
    display: none;
   }
`

const ProductsSectionNyx = ({ loading, products }: SectionProps) => {
    const navigate = useNavigate();

    return (
        <Container>
            <h2>O produto certo para sua pele</h2>
            <div className='carouselProducts'>
                {!loading && products.length > 0 &&
                    <SectionProducts>
                        <button className='buttonContainer'>
                            <GrPrevious />
                        </button>
                        {products.map((item: any, id: number) => (
                            item.brand == 'nyx' && item.price > 5 && item.category == 'concealer' && item.product_type == 'foundation' ?
                                <div>
                                    <CardProduct
                                        key={id}
                                        name={item.name}
                                        price={item.price}
                                        image_link={item.image_link}
                                        category={item.brand}
                                        id={item.id}
                                        onClick={() => navigate(`/products/${item.id}`)}
                                    /></div> : null
                        ))}
                        <button className='buttonContainer'>
                            <GrNext />
                        </button>
                    </SectionProducts>
                }
            </div>
        </Container>
    )
}

export default ProductsSectionNyx