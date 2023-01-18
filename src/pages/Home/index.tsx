import React from 'react'
import CarouselHome from '../../components/Carousel'
import Categories from '../../components/Categories'
import CouponSection from '../../components/CouponSection'

const Home = () => {
    return (
        <>
            <CarouselHome />
            <Categories />
            <CouponSection />
        </>
    )
}

export default Home