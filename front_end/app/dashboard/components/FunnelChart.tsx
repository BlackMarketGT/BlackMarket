"use client";

import React, { useEffect, useState } from "react";
import { FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer } from "recharts";

const FunnelChartComponent: React.FC = () => {
  const [funnelData, setFunnelData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/dashboard-data");
        const data = await res.json();
        setFunnelData(data.funnelData);
      } catch (error) {
        console.error("Error fetching funnel data:", error);
      }
    };

    fetchData();
  }, []);

  if (funnelData.length === 0) return <p className="text-white text-center">Loading Funnel Chart...</p>;

  return (
    <div className="chart-container">
      <h3 className="text-white text-center mb-4">User Funnel</h3>
      <ResponsiveContainer width="100%" height={300}>
        <FunnelChart>
          <Tooltip />
          <Funnel dataKey="value" data={funnelData} isAnimationActive fill="#a06cd5">
            <LabelList position="right" fill="white" stroke="none" dataKey="name" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FunnelChartComponent;
