import React from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import Cart from './pages/cart/cart';
import Placeorder from './pages/placeorder/placeorder';
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />
      </Routes>
    </div>
  )
}

export default App


