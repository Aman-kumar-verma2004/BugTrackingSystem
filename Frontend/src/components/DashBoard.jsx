import React, {useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'

function DashBoard() {

    const[user, setUser] = useState()
    const[issues, setIssues] = useState([]);
    const[loading, setLoading] = useState(true);
    const socket = io('http://localhost:5000')
    const navigate = useNavigate();

    useEffect(() => {
        const fetchIssue = async () => {
          try{
            const responce = await fetch('http://localhost:5000/api/issues', {
              headers : { Authorization : `Bearer ${localStorage.getItem('token')}`},
            }) 

            const data = await responce.json()
            setIssues(data);
          }catch{
              console.error("Error fetching issue : " , error)
          }
          setLoading(false)
        }
        fetchIssue();



    },[])

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
        navigate("/")
    }



  return (
    <div className='text-white bg-black'>
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
        
      </div>
      
      <div className='flex justify-around m-10 text-black w-full font-bold'>
        <div className=''>
          <h2>Total Issues</h2>
          <p className='flex justify-center'>{issues.length}</p>
        </div>
        <div>
          <h2>Resolved</h2>
          <p className='flex justify-center'>{issues.filter(issue => issue.status === 'Resolved').length}</p>
        </div>
        <div>
          <h3>Pending</h3>
          <p className='flex justify-center'>{issues.filter(issue => issue.status !== 'Resolved').length}</p>
        </div>
        

      </div>
      <div className="bg-white text-black p-4 rounded shadow">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold mr-10">Issues</h2>
            <Link to="/create-issue" className="bg-green-500 px-4 py-2 rounded text-white">+ Create Issue</Link>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {issues.map((issue) => (
                <li key={issue._id} className="border-b p-2">
                  <Link to={`/issue/${issue._id}`} className="text-blue-500 hover:underline">
                    {issue.title} - <span className="text-gray-600">{issue.status}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
    </div>
    
  )
}

export default DashBoard
