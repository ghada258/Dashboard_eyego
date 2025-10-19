import React from 'react';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Chart from "@/components/Chart";
const layout = ({children}) => {
  return (
   
    <>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <main className="flex-1 flex justify-center gap-5 items-center mt-15 xs:mr-40 md:pl-40">
         {children}
        </main>
      </div>
    </>
  )
}

export default layout