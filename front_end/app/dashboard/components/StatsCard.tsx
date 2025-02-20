import React from "react";

interface StatsCardProps{

    title: string;
    value: string;
    change: string;

}

const StatsCard: React.FC <StatsCardProps> = ({title, value, change}) => {

    return(
        <div className = "stats-card">
            <h3>{title}</h3>
            <p className = "value">{value}</p>
            <span className = "change">{change}</span>
        </div>
    );
};

export default StatsCard;