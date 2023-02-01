import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import ButtonSecondary from '../../components/Buttons/secondary'
import Loading from '../../components/Loading';
import api from '../../service/api';
import { Product } from '../../types/Product';

const ContainerProduct = styled.section`
  margin: 3em 10em;
  display:flex;
  justify-content: space-between;

  figure {
    width: 20em;
  }

  img {
    width: 100%;
  }
`

const ContainerInfos = styled.div`
  width: 40em;
`

const ProductId = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const { id } = useParams();

  async function request() {
    await api.get(`/products.json`).then(({ data }) => {
      setProduct(data);
    })
  }


  useEffect(() => {
    setTimeout(() => {
      request();
    }, 0)
  }, []);

  return (
    <>
      {product.length > 0 ?
        <>
          {product.map((item: any) => (
            item.id == id ?
              <ContainerProduct>
                <figure>
                  <img src={item.image_link} />
                </figure>
                <ContainerInfos>
                  <h3>{item.name}</h3>
                  <p>{item.brand}</p>
                  <p>{item.category}  {item.product_type}</p>
                  <p>{item.description}</p>
                  <h2>{item.price_sign} {item.price}</h2>
                  <div>

                  </div>
                  <ButtonSecondary text='Comprar' />
                </ContainerInfos>
              </ContainerProduct> : null
          ))}</> : <Loading />
      }
    </>

  )

}

export default ProductId



// "product_colors":[{"hex_value":"#FFFEFC","colour_name":"Light"},
// {"hex_value":"#FDF9F6","colour_name":"Medium"},
// {"hex_value":"#F1F2F4","colour_name":"Deep"}