import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change }) => {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <p className="change">{change}</p>
    </div>
  );
};

export default StatsCard;
