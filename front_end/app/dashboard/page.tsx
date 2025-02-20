"use client";

import React from "react";
import DashboardLayout from "./layout";
import "./styles/dashboard.css";
import StatsCard from "./components/StatsCard";
import SalesChart from "./components/SalesChart";
import ProgressBar from "./components/ProgressBar";

const DashboardPage: React.FC = () => {

    return(

        <DashboardLayout>
            <div className = "dashboard-content">
                <div className = "dashboard-overview">
                    <div className = "overview-text">
                        <h2>Dashboard Overview</h2>
                        <p>This is where you will see important metrics and analytics.</p>
                        <div className = "stats-container">
                            <StatsCard title = "Transactions" value = "45,300" change = "+2.87%"/>
                            <StatsCard title = "Total Users" value = "89,500" change = "+0.73%"/>
                            <StatsCard title = "Orders Placed" value = "200,543" change = "+1.90%"/>

                        </div>

                        <div className = "progress-container">
                            <ProgressBar title = "Quarter Sales Goal" progress = {70} goal = {100}/>
                            <ProgressBar title = "Customer Growth" progress = {55} goal = {100}/>
                        </div>
                    </div>
                    <div className = "chart-section">
                    <SalesChart/>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;