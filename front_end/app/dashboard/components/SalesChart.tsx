"use client";

import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const SalesChart: React.FC = () => {
  const [salesData, setSalesData] = useState<{ month: string; totalSales: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/dashboard-data");
        const data = await res.json();
        setSalesData(data.salesData);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchData();
  }, []);

  if (salesData.length === 0) return <p className="text-white text-center">Loading Sales Chart...</p>;

  return (
    <div className="chart-container">
      <h3 className="text-white text-center mb-4">Sales Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="month" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip />
          <Line type="monotone" dataKey="totalSales" stroke="#a06cd5" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
