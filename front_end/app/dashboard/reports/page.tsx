"use client";

import React from "react";
import DashboardLayout from "../layout";
import "../styles/dashboard.css";

const ReportsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <h2>Reports</h2>
        <p>View detailed reports and analytics here.</p>
      </div>
    </DashboardLayout>
  );
};

export default ReportsPage;
