"use client";

import React from "react";
import SalesChart from "./SalesChart";
import FunnelChartComponent from "./FunnelChart";

const Charts: React.FC = () => {
  return (
    <div className="chart-section">
      <SalesChart />
      <FunnelChartComponent />
    </div>
  );
};

export default Charts;
