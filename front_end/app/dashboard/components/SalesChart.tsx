"use client";

import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from "recharts";

  const salesData = [
    { month: "Jan", totalSales: 4000, netSales: 2400 },
    { month: "Feb", totalSales: 3000, netSales: 1398 },
    { month: "Mar", totalSales: 5000, netSales: 2800 },
    { month: "Apr", totalSales: 7000, netSales: 3908 },
    { month: "May", totalSales: 6000, netSales: 4800 },
    { month: "Jun", totalSales: 5500, netSales: 4500 },
  ];


const CustomToolTip = ({active, payload, label}: any) =>{
  if(active && payload && payload.length){

    return(

      <div className = "tooltip-box">
        <p className = "tooltip-label">{label}</p>
        <p className = "tooltip-value">Total Sales: {payload[0].value}</p>
        <p className = "tooltip-value">Net Sales: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

  const SalesChart: React.FC = () => {
    return(

        <div className = "chart-container">
            <h3>Sales Analytics</h3>
            <ResponsiveContainer width = "100%" height = {300}>
                <LineChart data = {salesData}>
                    <CartesianGrid strokeDasharray = "3 3"/>
                    <XAxis dataKey = "month" />
                    <YAxis  stroke="#d1d1d1" />
                    <Tooltip content = {<CustomToolTip/>}/>
                    <Line type = "monotone" dataKey = "totalSales" stroke = "#8884d8" strokeWidth = {2} />
                    <Line type = "monotone" dataKey = "netSales" stroke = "#82ca9d" strokeWidth = {2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
  };

  export default SalesChart;