"use client";

import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import AddItemForm from "./components/AddItemForm";
import { Button } from "@/components/ui/button";
import "./styles/inventory.css";


const InventoryPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Inventory Management</h1>

      <Button 
        className="mb-6 bg-[#a06cd5] text-white hover:bg-[#8b5fbf]" 
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Add New Item"}
      </Button>

      {showForm && <AddItemForm />}
      <InventoryTable />
    </div>
  );
};

export default InventoryPage;
