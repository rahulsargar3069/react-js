import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {

  return (
    <div>
    <div className='flex justify-center gap-10'>
        
        <Link className='flex justify-center font-bold text-2xl' to="/about/techno">Techno</Link>
        <Link className='flex justify-center font-bold text-2xl' to="/about/join">Join</Link>
      
    </div>
    <Outlet/>
    </div>
  )
}

export default About
