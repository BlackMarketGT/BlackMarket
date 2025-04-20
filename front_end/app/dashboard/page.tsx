"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

import StatsCard from "./components/StatsCard";
import SalesChart from "./components/SalesChart";
import ProgressBar from "./components/ProgressBar";
import InventoryTable from "../inventory/components/InventoryTable";
import OrderList from "../inventory/components/OrderList";
import AddItemForm from "../inventory/components/AddItemForm";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-[#1e1e1e] mb-6 border border-[#a06cd5]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StatsCard title="Transactions" value="45,300" change="+2.87%" />
            <StatsCard title="Total Users" value="89,500" change="+0.73%" />
            <StatsCard title="Orders Placed" value="200,543" change="+1.90%" />
          </div>

          <div className="mb-6">
            <ProgressBar title="Quarter Sales Goal" progress={70} goal={100} />
            <ProgressBar title="Customer Growth" progress={55} goal={100} />
          </div>

          <div className="mt-6">
            <SalesChart />
          </div>
        </TabsContent>

        {/* Inventory Tab */}
        <TabsContent value="inventory">
          <h2 className="text-2xl font-bold mb-4">Inventory</h2>

          {/* Add Item Form */}
          <div className="mb-6">
            <AddItemForm />
          </div>

          {/* Inventory Table */}
          <InventoryTable />
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <h2 className="text-2xl font-bold mb-4">Orders</h2>
          <OrderList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
