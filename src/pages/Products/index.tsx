import React, { useState, useEffect } from 'react'
import CardProducts from '../../components/CardProducts';
import api from '../../service/api';
import { Product } from '../../types/Product';
import styled from 'styled-components'


const Container = styled.main`
  margin: 2em 8em;
`

const SectionProducts = styled.section`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: baseline;
  
`

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  async function request() {
    await api.get('/products.json').then(({ data }) => {
      setProducts(data)
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
     {loading &&
      <p>Carregando...</p>}

      {!loading && products.length > 0 &&
      <SectionProducts>
        {products.map((item, index)=>(
          
          <CardProducts 
          key={index}
          name={item.name}
          price={item.price}
          image_link={item.image_link}
          category={item.category}
          /> 
        ))}
        </SectionProducts>
      }
    </Container>
  )
}

export default ProductsPage