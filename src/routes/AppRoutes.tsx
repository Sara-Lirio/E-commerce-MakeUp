import React from 'react'
import CarouselHome from '../components/Carousel'
import Categories from '../components/Categories'
import CouponSection from '../components/CouponSection'
import Header from '../components/Header'
import Menu from '../components/Menu'

const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Menu />
      <CarouselHome/>
      <Categories/>
      <CouponSection/>
    </div>
  )
}

export default AppRoutes