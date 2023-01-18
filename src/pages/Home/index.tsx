import React from 'react'
import CarouselHome from '../../components/Carousel'
import Categories from '../../components/Categories'
import CouponSection from '../../components/CouponSection'
import RegistrationForm from '../../components/RegistrationForm'

const Home = () => {
    return (
        <>
            <CarouselHome />
            <Categories />
            <CouponSection />
            <RegistrationForm/>
        </>
    )
}

export default Home