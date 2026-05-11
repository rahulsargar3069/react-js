import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Course from './Components/Course'
import About from './Components/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
