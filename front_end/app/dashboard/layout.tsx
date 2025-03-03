import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/dashboard.css";

interface LayoutProps{
    children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({children}) => {

    return (
        
        <div className = "dashboard-container">
            
            
            <div className = "dashboard-content">
                
                <Sidebar />
                
                <main className = "main-content">
                    
                    {children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;