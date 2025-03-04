"use client";

import React from "react";
import DashboardLayout from "../layout";
import "../styles/dashboard.css";

const SettingsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <h2>Settings</h2>
        <p>Adjust your dashboard settings here.</p>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
