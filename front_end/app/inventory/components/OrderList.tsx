"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

type Order = {
  id: number;
  item: string;
  quantity: number;
  status: string;
  date: string;
};

const OrderList = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("/api/inventory")
      .then((res) => res.json())
      .then((data) => setOrders(data.orders || []));
  }, []);

  const updateStatus = async (id: number, newStatus: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);

    await fetch("/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        update: true,
        type: "order",
        id,
        status: newStatus,
      }),
    });
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id} className="p-4 border border-[#a06cd5] bg-[#1a1a1a] text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Order #{order.id}</h3>
              <p>Item: {order.item}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Date: {order.date}</p>
            </div>
            <div>
              <Select value={order.status} onValueChange={(val) => updateStatus(order.id, val)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Ordered">Ordered</SelectItem>
                  <SelectItem value="Shipped">Shipped</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
