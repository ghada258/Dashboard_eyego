import React from 'react';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const layout = ({children}) => {
  return (
    <>
     <Navbar/>
     <Sidebar/>
     <div>
        {children}
     </div>
    </>
  )
}

export default layout