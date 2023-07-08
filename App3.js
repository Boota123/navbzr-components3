import React from 'react'
import { BrowserRouter as Router, Routes, Route, Switch, } from 'react-router-dom'
import Home from './components3/Home'
import About from './components3/About'
import Skills from './components3/Skills'
import Contact from './components3/Contact'
import Signup from './components3/Signup'
import Navbar from './components3/Navbar/Navbar'

const App3 = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path ="/skills" element={<Skills/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
      </Routes>
    </Router>
  )
}

export default App3
