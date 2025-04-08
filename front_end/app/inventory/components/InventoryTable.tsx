"use client";

import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const InventoryTable: React.FC = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);

  useEffect(() => {
    fetch("/api/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = async (id: number) => {
    const res = await fetch("/api/inventory", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>${item.price.toFixed(2)}</TableCell>
            <TableCell>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InventoryTable;
