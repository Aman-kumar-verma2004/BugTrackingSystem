import React from 'react'
import SignUp from "../Image/SignUp.webp"
import Create from "../Image/Create issue.webp"
import Collaborate from "../Image/Collaborate.webp"


function Steps() {
  return (
    <div>
      <section className="py-16 text-center text-white mt-65">
        <h1 className='text-6xl'>How it Works ?</h1>
        <div className="space-y-10">
      <div className="flex items-center justify-center gap-10">
        <div className="text-left w-1/2">
          <h3 className="text-3xl font-semibold">1. Sign Up</h3>
          <p className="text-gray-700 text-xl p-5">Create an account to get started.</p>
        </div>
        <img src={SignUp} alt="Sign Up" className="w-1/7 rounded-full shadow-md" />
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="text-left w-1/2">
          <h3 className="text-3xl font-semibold">2. Create Issues</h3>
          <p className="text-gray-700 text-xl p-5">Report bugs and track progress.</p>
        </div>
        <img src={Create} alt="Create Issues" className="w-1/7 rounded-full shadow-md" />
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="text-left w-1/2">
          <h3 className="text-3xl font-semibold">3. Collaborate</h3>
          <p className="text-gray-700 text-xl p-5">Work with your team to resolve issues.</p>
        </div>
        <img src={Collaborate} alt="Collaborate" className="w-1/7 rounded-full shadow-md" />
      </div>
    </div>
      </section>
    </div>
  )
}

export default Steps
