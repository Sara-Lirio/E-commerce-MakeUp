import React from 'react'
import CarouselHome from '../../components/Carousel'
import Categories from '../../components/Categories'
import CouponSection from '../../components/CouponSection'
import ProductsSectionNyx from '../../components/ProductsSection_nyx'
import RegistrationForm from '../../components/RegistrationForm'
import BannerNyx from '../../assets/images/nyx-banner.webp'
import styled from 'styled-components'

const ImgBanner = styled.div`
    margin: 0 5em;
    display:flex;
    justify-content:center;
    
    img {
        width: 90%
    }
    
`

const Home = () => {
    return (
        <>
            <CarouselHome />
            <Categories />
            <CouponSection />

            <ProductsSectionNyx />
            <ImgBanner>
                <img src={BannerNyx} />
            </ImgBanner>

            <RegistrationForm />

        </>
    )
}

export default Home