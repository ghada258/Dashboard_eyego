import React from 'react'

const Sidebar = () => {
  return (
    <>
     <aside className="fixed top-0 left-0 h-screen w-64 bg-[#23466bff] text-white shadow-lg flex flex-col justify-between">

      <nav className="flex-col gap-2 px-4 py-25 space-y-4 text-white">
        <a href="/dashboard" className="flex text-lg items-center  p-2 rounded-lg text-white hover:bg-white hover:text-[#23466bff] transition">
         Dashboard
        </a>
         <a href="/" className="flex text-lg items-center  p-2 rounded-lg text-white hover:bg-white hover:text-[#23466bff] transition">
          Employees
        </a>
    
      </nav>

      <div className="p-4 border-t  border-white">
        <button className="flex items-center gap-3 hover:text-[#23466bff] w-full p-2 rounded-lg hover:bg-white transition">
           Logout
        </button>
      </div>
    </aside>
    </>
  )
}

export default Sidebar