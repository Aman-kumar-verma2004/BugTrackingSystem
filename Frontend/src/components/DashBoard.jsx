import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FileUploads from './FileUploads';

function DashBoard() {

    const[user, setUser] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(!token) {
            navigate("/login")
        }else{
            const userData = JSON.parse(localStorage.getItem("user")) || {};
            setUser(userData);
        }
    },[navigate])

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        navigate("/login")
    }



  return (
    <div className='text-white'>
      <div className=" flex flex-col items-center justify-center bg-gray-100">
      <nav className="w-full bg-gray-900 text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Bug Tracker Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded cursor-pointer">
          Logout
        </button>
      </nav>
      
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-black">Welcome, {user?.name || "User"}!</h2>
        <p className="text-lg text-gray-900 mt-2">Manage your bugs efficiently.</p>
        <FileUploads />
      </div>
    </div>
    </div>
  )
}

export default DashBoard
