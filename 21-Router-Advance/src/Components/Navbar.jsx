import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-orange-400 flex justify-between p-10 text-2xl font-bold text-white '>
      <h2>Videography</h2>
      <div className='flex gap-10'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar
