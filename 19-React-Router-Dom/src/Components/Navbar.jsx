import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-blue-400 text-white p-6 flex justify-between">
      <h2 className="font-bold text-3xl">Rahul Graphics</h2>
      <div className="flex gap-10 font-bold pr-10">
        <Link to="/">Home</Link>
        <Link to="/course">Course</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar
