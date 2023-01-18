import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Header />
        <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
       
      </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes