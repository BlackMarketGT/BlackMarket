"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import "./styles/dashboard.css";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import ProgressBar from "./components/ProgressBar";
import Charts from "./components/Charts";


interface DashboardData {
  transactions: { value: string; change: string };
  totalUsers: { value: string; change: string };
  ordersPlaced: { value: string; change: string };
  quarterSalesGoal: { progress: number; goal: number };
  customerGrowth: { progress: number; goal: number };
}

const DashboardPage: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/dashboard-data"); // API route for backend data
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <Header />
        <div className="dashboard-overview">
          <div className="overview-text">
            <p>This is where you will see important metrics and analytics.</p>

            {/* Stats Overview */}
            <div className="stats-container">
              <StatsCard title="Transactions" value={data.transactions.value} change={data.transactions.change} />
              <StatsCard title="Total Users" value={data.totalUsers.value} change={data.totalUsers.change} />
              <StatsCard title="Orders Placed" value={data.ordersPlaced.value} change={data.ordersPlaced.change} />
            </div>

            {/* Progress Bars */}
            <div className="progress-container">
              <ProgressBar title="Quarter Sales Goal" progress={data.quarterSalesGoal.progress} goal={data.quarterSalesGoal.goal} />
              <ProgressBar title="Customer Growth" progress={data.customerGrowth.progress} goal={data.customerGrowth.goal} />
            </div>
            
          </div>

          {/* Charts Section */}
          <div className="chart-section">
            <Charts />
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
