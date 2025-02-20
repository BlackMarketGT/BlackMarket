"use client";

import React from "react";

interface ProgressBarProps{
    title: string;
    progress: number;
    goal: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({title, progress, goal}) => {

    const percentage = (progress/goal) * 100;

    return(
        <div className = "progress-bar-container">
            <div className = "progress-bar-title">
                <span>{title}</span>
                <span>{progress}/ {goal}</span>
            </div>
            <div className = "progress-bar">
                <div className = "progress-bar-fill"
                     style = {{ width: `${percentage}%`}}>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;