"use client";

import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {

    return(
        <nav className = "sidebar">
            <h2>Dashboard</h2>
            <ul>
                {/* Navigation Links */}
                <li>
                    <Link href = "/dashboard">Home</Link>
                </li>
                <li>
                    <Link href = "/dashboard/reports">Reports</Link>
                </li>
                <li>
                    <Link href = "/dashboard/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;