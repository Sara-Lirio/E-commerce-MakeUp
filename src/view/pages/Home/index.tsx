import React, { useState, useEffect, useRef } from 'react'
import CarouselHome from '../../components/Carousel'
import Categories from '../../components/Categories'
import CouponSection from '../../components/CouponSection'
import ProductsSectionNyx from '../../components/ProductsSection_nyx'
import RegistrationForm from '../../components/RegistrationForm'
import BannerNyx from '../../../assets/images/nyx-banner.webp'
import styled from 'styled-components'
import ProductsSectionClinique from '../../components/ProductsSection_clinique'
import api from '../../service/api'
import { Product } from '../../types/Product';

const ImgBanner = styled.div`
    margin: 0 5em;
    display:flex;
    justify-content:center;
    
    img {
        width: 92%
    }    
`

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    async function request() {
        await api.get('/products.json').then(({ data }) => {
            setProducts(data);
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
            request();
            setLoading(false);
        }, 0)
    }, []);

    return (
        <>
            <CarouselHome />
            <Categories />
            <CouponSection />

            <ProductsSectionNyx 
                loading={loading}
                products={products} />

            <ImgBanner>
                <img src={BannerNyx} />
            </ImgBanner>

            <ProductsSectionClinique 
            loading={loading} 
            products={products} />

            <RegistrationForm />
        </>
    )
}

export default Home