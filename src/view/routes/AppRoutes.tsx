import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import ProductsPage from '../pages/Products'
import Registration from '../pages/Registration'
import ShoppingCart from '../pages/ShoppingCart'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Header />
        <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cadastre-se' element={<Registration/>} />
        <Route path='/produtos' element={<ProductsPage/>} />
        <Route path='/shopping' element={<ShoppingCart/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes