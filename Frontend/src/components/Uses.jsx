import React from 'react'
import streamline from "../Image/streamline.webp"
import boost from "../Image/boost.webp"
import improve from "../Image/improve.webp"
import faster from "../Image/faster.webp"
import gain from "../Image/gain.webp"

function Uses() {
  return (
    <div>
      <section className="py-16 text-center text-white">
        <h2 className="text-6xl font-bold ">Why Use Bug Tracker?</h2>
        <div className="mt-20 space-y-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="text-center md:text-left md:w-2/3">
              <h3 className="text-3xl font-semibold">1. Streamline Issue Management</h3>
              <p className="text-lg md:block text-gray-700 px-10 py-5 md:px-14">Stop chasing bugs manually. Track, prioritize, and resolve issues faster — all in one place.</p>
              <p className="text-lg hidden md:block italic text-gray-500 px-4 md:px-14">"Track bugs like a pro — no more chaos."</p>
            </div>
            <img src={streamline} alt="Issue Management" className="md:ml-25 w-1/2 md:w-1/5 rounded-full shadow-md" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="text-center md:text-left md:w-2/3">
              <h3 className="text-3xl font-semibold">2. Boost Team Collaboration</h3>
              <p className="text-lg md:block text-gray-700 px-4 py-5 md:px-14">Empower your team to collaborate in real time. Assign tasks, track progress, and crush bugs together.</p>
              <p className="text-lg hidden md:block italic text-gray-500 px-4 md:px-14">"Coding is teamwork. Bug tracking should be too."</p>
            </div>
            <img src={boost} alt="Team Collaboration" className="md:ml-25 w-1/2 md:w-1/5 rounded-full shadow-md" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="text-center md:text-left md:w-2/3">
              <h3 className="text-3xl font-semibold">3. Improve Code Quality</h3>
              <p className="text-lg md:block text-gray-700 px-4 py-5 md:px-14">Spot recurring issues, analyze patterns, and continuously enhance your software.</p>
              <p className="text-lg hidden md:block italic text-gray-500 px-4 md:px-14">"Fix it once, fix it forever."</p>
            </div>
            <img src={improve} alt="Code Quality" className="md:ml-25 w-1/2 md:w-1/5 rounded-full shadow-md" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="text-center md:text-left md:w-2/3">
              <h3 className="text-3xl font-semibold">4. Faster Release Cycles</h3>
              <p className="text-lg md:block text-gray-700 px-4 py-5 md:px-14">No more delays. With organized issue tracking, deliver updates and new features on time.</p>
              <p className="text-lg hidden md:block italic text-gray-500 px-4 md:px-14">"Ship faster without sacrificing quality."</p>
            </div>
            <img src={faster} alt="Faster Release" className=" w-1/2 md:w-1/5 md:ml-25 rounded-full shadow-md" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="text-center md:text-left md:w-2/3">
              <h3 className="text-3xl font-semibold">5. Gain Valuable Insights</h3>
              <p className=" text-lg md:block text-gray-700 px-4 py-5 md:px-14">Get analytics on bug frequency, team performance, and resolution speed — make data-driven decisions.</p>
              <p className="text-lg hidden md:block italic text-gray-500 px-4 md:px-14">"Bugs tell a story. Let’s decode it."</p>
            </div>
            <img src={gain} alt="Insights" className="md:ml-25 w-1/2 md:w-1/5 rounded-full shadow-md" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Uses