import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Player from './pages/Player'

const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/'}element={<Home />}></Route>
      <Route path={'/login'} element={<Login />}></Route>
      <Route path='/player/:id' element={<Player />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App