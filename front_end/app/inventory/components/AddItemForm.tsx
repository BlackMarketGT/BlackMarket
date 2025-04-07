"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AddItemForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState("electronics");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      name,
      quantity,
      price,
      category,
    };

    await fetch("/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    setName("");
    setQuantity(0);
    setPrice(0);
    setCategory("electronics");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md bg-[#1e1e1e] p-6 rounded-xl border border-[#a06cd5]">
      <Input
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-black"
      />
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="text-black"
      />
      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="text-black"
      />

      {/* ✅ Category dropdown */}
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="text-white border border-[#a06cd5]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="clothing">Clothing</SelectItem>
          <SelectItem value="accessories">Accessories</SelectItem>
          <SelectItem value="books">Books</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" className="bg-[#a06cd5] hover:bg-[#8b5fbf]">
        Add Item
      </Button>
    </form>
  );
};

export default AddItemForm;
