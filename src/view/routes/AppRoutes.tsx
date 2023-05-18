import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import Footer from '../components/Footer'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Home from '../pages/Home'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Header />
  
      {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cadastre-se' element={<Registration/>} />
        <Route path='/products/:product_type' element={<ProductsType/>} />
        <Route path='/shopping' element={<ShoppingCart/>} />
        <Route path='/products/:id' element={<ProductId/>} />
      </Routes> */}
        {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default AppRoutes