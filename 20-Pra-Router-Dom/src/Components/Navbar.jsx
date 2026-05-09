import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-amber-400 p-10 flex justify-between text-2xl font-bold'>
            <h2>Practice After Learn basic </h2>
          <div className='flex gap-10 underline '>
              <Link to="/">Home </Link>
              <Link to="/login">Login</Link>
           </div>
    </div>
  )
}

export default Navbar
