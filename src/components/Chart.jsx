"use client";
import React from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer} from "recharts";

const Chart = ({ title, data, color = "#23466b" }) => {

  return (
    <>
     <div className="bg-white shadow-md rounded-lg p-3 h-[295px]">
      <h2 className="text-xl font-semibold text-[#23466b] mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default Chart