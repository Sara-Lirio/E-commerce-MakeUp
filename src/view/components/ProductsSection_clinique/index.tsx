import React from 'react'
import CardProduct from '../CardProduct';
import styled from 'styled-components'
import { GrNext, GrPrevious } from "react-icons/gr";
import Bg_clinique from '../../../assets/images/background_clinique.jpg'
import LogoClinique from '../../../assets/images/Clinique_logo.svg.png'
import Loading from '../Loading';
import { SectionProps } from '../ProductsSection_nyx';
import { useNavigate } from 'react-router-dom';

const Container = styled.main`
  margin: 2em 8em;
  background-image: url(${Bg_clinique});
  background-size: cover;
  background-repeat: no-repeat;
  height: 25em;
`
const LoadClinique = styled.main`
  margin: 2em 8em;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

  img {
    width: 20%;
    margin-top: 2em
  }
  
`
const SectionProducts = styled.section`
display: flex;
justify-content: space-around;
padding: .9em;
align-items: center;
width: 36em;

.buttonContainer {
    background-color: #F1f1f1;
    border-radius: 2em;
    width: 2.3em;
    height: 2.3em;
    border:none;
    padding: 0 1.2em .2em .7em;
    margin-right:2em;
    -webkit-box-shadow: 4px 4px 4px rgba(50, 50, 50, 0.3);
	-moz-box-shadow: 4px 4px 4px rgba(50, 50, 50, 0.3);
	box-shadow: 4px 4px 4px rgba(50, 50, 50, 0.3);
  }
`

const ProductsSectionClinique = ({loading, products}: SectionProps) => {
  const navigate = useNavigate();

    return (
        <>
        {products.length > 0  ? 
        <Container>
            <SectionProducts>
                <button className='buttonContainer'>
                    <GrPrevious />
                </button>
                {products.map((item:any, id:number) => (
                    item.brand == 'clinique' &&
                        item.product_type == 'bronzer' &&
                        item.price == 28 ?
                        <div>
                            <CardProduct
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                image_link={item.image_link}
                                category={item.product_type}
                                onClick={() => navigate(`/products/${item.id}`)}
                            /></div> : null
                ))}
                <button className='buttonContainer'>
                    <GrNext />
                </button>
            </SectionProducts>
        </Container>
    : <LoadClinique></LoadClinique>}
    </>
    )
}

export default ProductsSectionClinique