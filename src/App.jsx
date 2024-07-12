import './App.css'
import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Contacts from './pages/Contact/Contacts'
import { Favorites } from './pages/Favorites/Favorites'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Outlet />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/favorites' element={<Favorites />} /> 
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App