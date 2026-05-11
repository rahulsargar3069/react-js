import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import {Routes , Route} from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Join from './Pages/Join'
import Techno from './Pages/Techno'
import LoginDetails from './Pages/LoginDetails'
import Navbar2 from './Pages/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
       <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/about' element={<About/>}>
            <Route path='join' element={<Join/>}/>
            <Route path='techno' element={<Techno/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/login/:id' element={<LoginDetails/>}/>
          
          <Route path='*' element={<NotFound/>}/>
       </Routes>
      <Footer/>
    </div>
  )
}

export default App
