import React from 'react'
import {Link} from "react-router-dom"
function Hero() {
  return (
    <div>
      <section className='flex-col justify-center align-center text-center mt-15'>
        <h3 className='font-bold text-5xl p-10 bg-gradient-to-r from-blue-900 to-yellow-900 bg-clip-text text-transparent'>Track and Manage Bugs Efficiently</h3>
        <p className=' text-2xl font-semibold bg-gradient-to-r from-blue-900 to-yellow-900 bg-clip-text text-transparent'>A simple and powerful bug tracking system for teams.</p>
        <Link to="/register" className='border-1 mt-6 inline-block px-4 py-2 text-lg rounded-full bg-yellow-100'>Get Started</Link>
      </section>
    </div>
  )
}

export default Hero
