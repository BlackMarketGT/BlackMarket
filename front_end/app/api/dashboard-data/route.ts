import { NextResponse } from "next/server";

export async function GET() {
  // Placeholder data (backend team will replace this with real data)
  const dashboardData = {
    transactions: { value: "45,300", change: "+2.87%" },
    totalUsers: { value: "89,500", change: "+0.73%" },
    ordersPlaced: { value: "200,543", change: "+1.90%" },
    quarterSalesGoal: { progress: 70, goal: 100 },
    customerGrowth: { progress: 55, goal: 100 },

    // Dynamic Sales Chart Data
    salesData: [
      { month: "Jan", totalSales: 4000 },
      { month: "Feb", totalSales: 4500 },
      { month: "Mar", totalSales: 5200 },
      { month: "Apr", totalSales: 6100 },
      { month: "May", totalSales: 6800 },
      { month: "Jun", totalSales: 7200 },
      { month: "Jul", totalSales: 7900 },
      { month: "Aug", totalSales: 8500 },
      { month: "Sep", totalSales: 9200 },
      { month: "Oct", totalSales: 10000 },
      { month: "Nov", totalSales: 10700 },
      { month: "Dec", totalSales: 11500 },
    ],

    // Dynamic Funnel Chart Data
    funnelData: [
      { name: "Visitors", value: 5000 },
      { name: "Signups", value: 2500 },
      { name: "Customers", value: 1200 },
      { name: "Loyal Users", value: 600 },
    ],
  };

  return NextResponse.json(dashboardData);
}
