import React from 'react'
import {FaLinkedin, FaEnvelope, FaTwitter} from "react-icons/fa"
import footerImage from "../Image/logoFooter.png"
function Footer() {
  return (
    <div>
      <footer className="py-6  text-black flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-4">
        
        <div className="flex items-center justify-center md:justify-start">
          <img src={footerImage} alt="Footer Logo" className="h-16 w-16 md:h-24 md:w-24 object-cover rounded-full" />
        </div>

        
        <p className="text-sm md:text-base text-center order-last md:order-none text-white">
          © 2025 Aman Kumar Verma. All rights reserved.
        </p>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center justify-center md:justify-end space-x-4">
          <a href="https://www.linkedin.com/in/aman-kumar-verma-71104b24b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-white hover:text-blue-500 transition-all duration-300" />
          </a>
          <a href="mailto:amankv875@gmail.com">
            <FaEnvelope className="text-2xl text-white hover:text-red-500 transition-all duration-300" />
          </a>
          <a href="https://x.com/Ranger_7280?t=LOs6EvSk-VwEP93j5HGmUg&s=08" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-white hover:text-blue-400 transition-all duration-300" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
