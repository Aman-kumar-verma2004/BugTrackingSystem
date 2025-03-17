import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
      <nav className=" text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Bug Tracker</h1>
    <div>
      <Link to="/login" className="mr-4 hover:underline">Login</Link>
      <Link to="/register" className="hover:underline">Sign Up</Link>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
