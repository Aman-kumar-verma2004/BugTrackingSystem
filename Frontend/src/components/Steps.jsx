import React from 'react'
import SignUp from "../Image/SignUp.webp"
import Create from "../Image/Create.webp"
import Collaborate from "../Image/collaborate.webp"

function Steps() {
  return (
    <div>
      <section className="py-16 text-center text-white ">
        <h1 className='text-6xl font-bold '>How it Works ?</h1>
        <div className="space-y-10 mt-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 ">
            <div className="text-center md:text-left w-2/3 md:w-1/2">
              <h3 className="text-3xl font-semibold">1. Sign Up</h3>
              <p className="text-gray-700 text-xl p-5">Create an account to get started.</p>
            </div>
            <img src={SignUp} alt="Sign Up" className="w-1/2 md:w-1/7 rounded-full shadow-md" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="text-center md:text-left w-2/3 md:w-1/2">
              <h3 className="text-3xl font-semibold">2. Create Issues</h3>
              <p className="text-gray-700 text-xl p-5">Report bugs and track progress.</p>
            </div>
            <img src={Create} alt="Create Issues" className="w-1/2  md:w-1/7 rounded-full shadow-md" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="text-center md:text-left w-full md:w-1/2">
              <h3 className="text-3xl font-semibold">3. Collaborate</h3>
              <p className="text-gray-700 text-xl p-5">Work with your team to resolve issues.</p>
            </div>
            <img src={Collaborate} alt="Collaborate" className="w-1/2 md:w-1/7 rounded-full shadow-md" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Steps
