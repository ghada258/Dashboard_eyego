"use client";
import React from 'react';
import { useRouter } from "next/navigation";

const page = () => {
        const router = useRouter();
        const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/dashboard");
     };
  return (
    <div className="bg-[url('/blue_background.svg')] bg-cover bg-center min-h-screen flex justify-center items-center">
       <div className='bg-white w-xl rounded-xl flex-col justify-center items-center text-center py-6 px-8'>
          <div>
            <h1 className='font-bold text-2xl text-[#23466bff]'>Dashboard</h1>
            <p className='text-gray-400'>Sign In To The Dashboard </p>
          </div>
           <img src="dashboard_login.png" alt="" className='w-35 mt-4 mx-auto' />

        <form onSubmit={handleSubmit} className="w-full space-y-4">
             <div className="w-full mb-4">
            <label htmlFor="text" className="block text-left pl-2 text-gray-700 font-medium mb-1">
             Name
            </label>
           <input type="text" id="text" placeholder="Ghada Elsayed" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"/>
          </div>
          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-left pl-2 text-gray-700 font-medium mb-1">
            Email 
            </label>
           <input type="email" id="email" placeholder="example@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"/>
          </div>
           <div className="w-full mb-4">
            <label htmlFor="email" className="block text-left pl-2 text-gray-700 font-medium mb-1">
            Password
            </label>
           <input type="password" id="password" placeholder="************" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"/>
          </div>

           <button type="submit" className="w-full bg-[#23466bff] hover:bg-[#1C7EBB] text-white font-semibold py-2 rounded-lg mt-6" >
            Sign In
          </button>
         </form>
          
       </div>
    </div>
  )
}

export default page