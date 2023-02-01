import React, { useState, useEffect } from 'react'
import CardProduct from '../../components/CardProduct';
import api from '../../service/api';
import { Product } from '../../types/Product';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

const Container = styled.main`
  margin: 2em 8em;
`

const SectionProducts = styled.section`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: baseline;
`

const Product_Type = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const { product_type } = useParams();

  async function request() {
    await api.get('/products?').then(({ data }) => {
      setProducts(data)
      console.log(setProducts(data))
    })
  }

  useEffect(() => {
    setTimeout(() => {
    setLoading(true);
    request()
    setLoading(false);
    }, 3000)
    console.log(products);
  }, []);

  return (
    <Container>
      {products.length > 0 ?
      <SectionProducts>
        {products.map((item:any)=>(
          // item.product_type == product_type ? 
          <CardProduct 
          name={item.name}
          price={item.price}
          image_link={item.image_link}
          category={item.category}
          />
          //  : null
        ))}
        </SectionProducts>
      : <Loading/> }
    </Container>
  )
}

export default Product_Type