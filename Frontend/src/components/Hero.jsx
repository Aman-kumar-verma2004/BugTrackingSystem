import React from 'react'
import {Link} from "react-router-dom"
import {motion } from "framer-motion"
import heroImage from "../Image/heroImage.webp"

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center mt-5 px-4 md:px-10">
    {/* Left Content */}
    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8 }} 
      className="w-full md:w-1/2 text-left  md:text-left"
    >
      <h3 className="font-bold text-3xl sm:text-4xl w-full leading-tight md:w-3/4 md:text-8xl p-3       bg-gradient-to-r from-green-100 to-green-900 bg-clip-text text-transparent">
        Track and Manage Bugs Efficiently
    </h3>
    <p className="m-4 text-lg text-gray-500 md:hidden">A simple and powerful bug tracking system for teams.</p>
     
      <Link to="/register" className="border mt-3 inline-block ml-4 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg rounded-full bg-yellow-100 hover:bg-yellow-200 transition mb-10">
        Get Started
      </Link>
    </motion.div>

    {/* Right Image */}
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8, delay: 0.3 }} 
      className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
    >
      <img src={heroImage} alt="Bug Tracking System" className="w-4/5 md:3/4 md:mb-8 rounded-lg shadow-lg" />
    </motion.div>
  </section>
  )
}

export default Hero
