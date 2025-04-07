"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const ProductList = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);

  useEffect(() => {
    fetch("/api/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProductList;
