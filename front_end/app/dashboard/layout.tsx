import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/dashboard.css";
import AuthProvider from "../firebase/authProvider";

interface LayoutProps{
    children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({children}) => {

    return (
        <AuthProvider>
        <div className = "dashboard-container">
            
            
            <div className = "dashboard-content">
                
                <Sidebar />
                
                <main className = "main-content">
                    
                    {children}</main>
            </div>
        </div>
        </AuthProvider>
    );
};

export default DashboardLayout;