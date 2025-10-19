"use client";
import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const Sidebar = () => {
     const router = useRouter(); 
    const logOut =()=> {
            localStorage.removeItem("username");
            router.push("/login");
    }
  return (
    <>
     <aside className="fixed top-0 left-0 h-screen xs:w-20 xs:ml-20 md:w-48 lg:w-56  bg-[#23466bff] text-white shadow-lg flex flex-col justify-between">

      <nav className="flex-col gap-2 px-4 py-25 space-y-4 text-white">

        <Link href="/dashboard" className="flex xs:text-md md:text-lg items-center gap-3 p-2 rounded-lg text-white hover:bg-white hover:text-[#23466bff] transition">
         <span><LuLayoutDashboard /></span> <span  className="hidden md:inline ">Dashboard</span>
        </Link>
         <Link href="/dashboard/employee" className="flex xs:text-md md:text-lg items-center gap-3 p-2 rounded-lg text-white hover:bg-white hover:text-[#23466bff] transition">
         <span><MdOutlinePeopleAlt /> </span> <span className="hidden md:inline ">Employees</span>
        </Link>
    
      </nav>

      <div className="p-4 border-t  border-white">
        <button  onClick={logOut} className="flex items-center gap-3 hover:text-[#23466bff] w-full text-lg p-2 rounded-lg hover:bg-white transition">
         <span> <RiLogoutBoxLine /> </span> <span  className="hidden md:inline ">Logout</span>
          
        </button>
      </div>
    </aside>
    </>
  )
}

export default Sidebar