import React from 'react'

const page = () => {
  return (
    <div className="bg-[url('/blue_background.svg')] bg-cover bg-center min-h-screen flex justify-center items-center">
       <div className='bg-white w-xl rounded-xl flex-col justify-center items-center text-center py-6 px-8'>
          <div>
            <h1 className='font-bold text-2xl text-blue-950'>Dashboard</h1>
            <p className='text-gray-400'>Sign In To The Dashboard </p>
          </div>
           <img src="dashboard_login.png" alt="" className='w-35 mt-4 mx-auto' />
          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-left pl-2 text-gray-700 font-medium mb-1">
            Email Address
            </label>
           <input type="email" id="email" placeholder="example@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"/>
          </div>
           <div className="w-full mb-4">
            <label htmlFor="email" className="block text-left pl-2 text-gray-700 font-medium mb-1">
            Password
            </label>
           <input type="password" id="password" placeholder="************" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"/>
          </div>
         
          
       </div>
    </div>
  )
}

export default page