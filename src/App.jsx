import React, { useState } from 'react'
import './App.css'
import Navebar from './components/Navebar/Navebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Videos from './pages/vids/Videos'

function App() {
  const [sidebar,setsidebar]=useState(true)
  return (
    <>
      <Navebar setsidebar={setsidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Videos/>}/>
      </Routes>
    </>
  )
}

export default App
