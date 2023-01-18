import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
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
    </BrowserRouter>
  )
}

export default AppRoutes