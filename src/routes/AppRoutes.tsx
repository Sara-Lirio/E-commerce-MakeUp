import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Header />
        <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cadastre-se' element={<Registration/>} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes