import React from 'react';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Chart from "@/components/Chart";
const layout = ({children}) => {
  return (
   
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 flex justify-center items-center mt-15 pl-40">
         {children}
        </main>
      </div>
    </>
  )
}

export default layout