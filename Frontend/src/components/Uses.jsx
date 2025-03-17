import React from 'react'
import streamline from "../Image/streamline.webp"
import team from "../Image/team.webp"
import improve from "../Image/improve.webp"
import faster from "../Image/faster.webp"
import enhanced from "../Image/enhanced.webp"



function Uses() {
  return (
    <div>
      <section className="py-16 text-center text-white">
    <h2 className="text-6xl font-bold">Why Use Bug Tracker?</h2>
    <div className="mt-8 space-y-10 max-w-4xl mx-auto mt-20">
      <div className="flex items-center gap-6">
        <img src={streamline} alt="Issue Management" className="w-1/4 rounded-lg shadow-md" />
        <div className="text-left">
          <h3 className="text-xl font-semibold">🔍 1. Streamline Issue Management</h3>
          <p className="text-gray-700 px-14">Stop chasing bugs manually. Track, prioritize, and resolve issues faster — all in one place.</p>
          <p className="italic text-gray-500 px-14">"Track bugs like a pro — no more chaos."</p>
        </div>
      </div>
      <div className="flex items-center gap-6 flex-row-reverse">
        <img src={team} alt="Team Collaboration" className="w-1/4 rounded-lg shadow-md" />
        <div className="text-left">
          <h3 className="text-xl font-semibold">🛠️ 2. Boost Team Collaboration</h3>
          <p className="text-gray-700 px-14">Empower your team to collaborate in real time. Assign tasks, track progress, and crush bugs together.</p>
          <p className="italic text-gray-500 px-14">"Coding is teamwork. Bug tracking should be too."</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <img src={improve} alt="Code Quality" className="w-1/4 rounded-lg shadow-md" />
        <div className="text-left">
          <h3 className="text-xl font-semibold">📈 3. Improve Code Quality</h3>
          <p className="text-gray-700 px-14">Spot recurring issues, analyze patterns, and continuously enhance your software.</p>
          <p className="italic text-gray-500 px-14">"Fix it once, fix it forever."</p>
        </div>
      </div>
      <div className="flex items-center gap-6 flex-row-reverse">
        <img src={faster} alt="Faster Release" className="w-1/4 rounded-lg shadow-md" />
        <div className="text-left">
          <h3 className="text-xl font-semibold">⚡ 4. Faster Release Cycles</h3>
          <p className="text-gray-700 px-14">No more delays. With organized issue tracking, deliver updates and new features on time.</p>
          <p className="italic text-gray-500 px-14">"Ship faster without sacrificing quality."</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <img src={enhanced} alt="Insights" className="w-1/4 rounded-lg shadow-md" />
        <div className="text-left">
          <h3 className="text-xl font-semibold">🧠 5. Gain Valuable Insights</h3>
          <p className="text-gray-700 px-14">Get analytics on bug frequency, team performance, and resolution speed — make data-driven decisions.</p>
          <p className="italic text-gray-500 px-14">"Bugs tell a story. Let’s decode it."</p>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Uses
