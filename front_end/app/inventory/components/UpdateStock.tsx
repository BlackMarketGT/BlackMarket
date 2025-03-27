"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UpdateStock = () => {
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleUpdate = async () => {
    const res = await fetch("/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        update: true,
        id: Number(id),
        quantity,
      }),
    });
  
    if (res.ok) {
      setId("");
      setQuantity(0);
    }
  };

  return (
    <div className="space-y-4">
      <Input placeholder="Product ID" value={id} onChange={(e) => setId(e.target.value)} />
      <Input type="number" placeholder="New Quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      <Button onClick={handleUpdate}>Update Stock</Button>
    </div>
  );
};

export default UpdateStock;
