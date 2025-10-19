"use client"
import React, { useState ,useEffect } from 'react';

const Navbar = () => {
      const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 z-50">
        <div className='flex justify-items-start items-center gap-3'>
          <img src="/dashboard_login.png" alt="dashboard" className='w-10' />
          <h1 className='font-bold text-2xl text-[#23466bff]'>Dashboard</h1>
        </div>
        
         <p className='text-[#23466bff] font-medium'> {userName ? `Hi, ${userName}` : "Welcome!"}</p>
          
     </nav>
  )
}

export default Navbar