"use client";
import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/userSlice";
import { MdOutlineFileDownload } from "react-icons/md";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";


const Page = () => {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const usersPerPage = 6;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  
  useEffect(() => {
    setSortedUsers(users);
  }, [users]);

  const handleSort = (value) => {
    let sorted = [...sortedUsers];
    if (value === "ATOZ") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "ZTOA") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    setSortedUsers(sorted);
  };

  const filteredUsers = sortedUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Employees Data", 14, 10);
    autoTable(doc, {
      head: [["ID", "Name", "Email", "Phone", "City", "Company", "Website"]],
      body: users.map((user) => [
        user.id,
        user.name,
        user.email,
        user.phone,
        user.address.city,
        user.company.name,
        user.website,
      ]),
    });

    doc.save("employees_data.pdf");
  };

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      users.map((user) => ({
        ID: user.id,
        Name: user.name,
        Email: user.email,
        Phone: user.phone,
        City: user.address.city,
        Company: user.company.name,
        Website: user.website,
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "employees_data.xlsx");
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <img className="w-lg text-center mt-20" src="/error_screen.png" alt="error" />;

  return (
 <div className="flex flex-col mt-10 sm:ml-20 lg:ml-0">
    <div className="flex items-center justify-between ">
         <select onChange={(e) => handleSort(e.target.value)} 
              defaultValue="" className="appearance-none text-center bg-white border border-[#23466b] text-[#23466b] px-4 py-3 rounded-lg cursor-pointer ">
              <option value="" disabled >Sort Data</option>
              <option value="ATOZ"> A to Z</option>
              <option value="ZTOA"> Z to A</option>
            </select>

            <input type="search" name="search" id="search" placeholder="Search by name ...." className="px-4 py-2  border border-gray-400 rounded-lg w-[50%]"  value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}/>

         <select onChange={(e) => {
                if (e.target.value === "pdf") handleDownloadPDF();
                if (e.target.value === "excel") handleDownloadExcel();
              }} 
              defaultValue="" className="appearance-none text-center bg-[#23466b] text-white px-4 py-3 rounded-lg cursor-pointer ">
              <option value="" disabled >Download as</option>
              <option value="pdf"> PDF</option>
              <option value="excel"> Excel</option>
            </select>

            
    </div>
    
      
    <div className="overflow-x-auto mt-2 rounded-lg ">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-[#23466b] text-white">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Phone</th>
            <th className="py-3 px-4 text-left">City</th>
            <th className="py-3 px-4 text-left">Company</th>
            <th className="py-3 px-4 text-left">Website</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="border-b border-b-gray-300 hover:bg-gray-100">
              <td className="py-3 px-4">{user.id}</td>
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">{user.phone}</td>
              <td className="py-3 px-4">{user.address.city}</td>
              <td className="py-3 px-4">{user.company.name}</td>
              <td className="py-3 px-4">{user.website}</td>
            </tr>
          ))}
           {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="7" className="py-4 text-center text-gray-500">
                  No matching names found
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>

    <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 border rounded-md ${
              currentPage === index + 1 ? "bg-[#23466b] text-white" : "bg-white text-[#23466b] border-[#23466b]" }`}>
            {index + 1}
          </button>
        ))}
      </div>
     </div>
  );
};

export default Page;
