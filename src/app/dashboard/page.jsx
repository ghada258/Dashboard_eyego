"use client";
import React from 'react';
import Chart from "@/components/Chart";

const page = () => {
    const employeeData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 450 },
    { name: "Mar", value: 470 },
    { name: "Apr", value: 520 },
    { name: "May", value: 560 },
    { name: "Jun", value: 600 },
  ];

  const salesData = [
    { name: "Jan", value: 200 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 350 },
    { name: "Apr", value: 400 },
    { name: "May", value: 380 },
    { name: "Jun", value: 420 },
  ];

  const profitData = [
    { name: "Jan", value: 120 },
    { name: "Feb", value: 180 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 250 },
    { name: "May", value: 270 },
    { name: "Jun", value: 300 },
  ];

  const expenseData = [
    { name: "Jan", value: 150 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 210 },
    { name: "Apr", value: 230 },
    { name: "May", value: 240 },
    { name: "Jun", value: 260 },
  ];

  return (
    <>
      <div className="w-full max-w-6xl pl-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
            <Chart title="Employee Growth" data={employeeData} color="#23466b" />
            <Chart title="Sales Performance" data={salesData} color="#f97316" />
            <Chart title="Profit Overview" data={profitData} color="#16a34a" />
            <Chart title="Expense Report" data={expenseData} color="#dc2626" />
            </div>
          </div>
    </>
  )
}

export default page