"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddItemForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = { name, quantity, price };

    const res = await fetch("/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    if (res.ok) {
      setName("");
      setQuantity(0);
      setPrice(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      <Input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default AddItemForm;
