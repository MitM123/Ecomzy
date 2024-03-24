import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Route } from 'react-router-dom'  
import { Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <div>
        <div  className='bg-slate-900'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  )
}

export default App
