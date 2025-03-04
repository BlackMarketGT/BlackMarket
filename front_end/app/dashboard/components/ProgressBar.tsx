import React from "react";

interface ProgressBarProps {
  title: string;
  progress: number;
  goal: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, progress, goal }) => {
  const progressPercentage = Math.min((progress / goal) * 100, 100);

  return (
    <div className="progress-bar-container">
      <p className="progress-bar-title">
        {title}: {progress}/{goal}
      </p>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
