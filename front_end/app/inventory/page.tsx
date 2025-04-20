"use client";

import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import AddItemForm from "./components/AddItemForm";
import OrderList from "./components/OrderList";
import { Button } from "@/components/ui/button";

const InventoryPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>

      <Button
        className="mb-6 bg-[#a06cd5] text-white hover:bg-[#8b5fbf]"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Add New Item"}
      </Button>

      {showForm && <AddItemForm />}
      <InventoryTable />

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Pending Orders</h2>
        <OrderList />
      </div>
    </div>
  );
};

export default InventoryPage;
