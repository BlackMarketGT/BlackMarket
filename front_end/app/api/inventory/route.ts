import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  category?: string;
  status?: string;
};

type Order = {
  id: number;
  item: string;
  quantity: number;
  status: string;
  date: string;
};

type Data = {
  inventory: InventoryItem[];
  orders: Order[];
};

const dataPath = path.join(process.cwd(), "app/api/inventory/data.json");

function readInventory(): Data {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch {
    return { inventory: [], orders: [] };
  }
}

function writeInventory(data: Data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = readInventory();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = readInventory();

  // 🔁 Handle inventory update
  if (body.update && body.id !== undefined && body.type !== "order") {
    const item = data.inventory.find((item) => item.id === Number(body.id));
    if (item) {
      item.quantity = body.quantity ?? item.quantity;
      item.price = body.price ?? item.price;
      item.status = body.status ?? item.status;
      item.category = body.category ?? item.category;
      writeInventory(data);
      return NextResponse.json(item);
    }
  }

  // 🔁 Handle order update
  if (body.update && body.type === "order") {
    const order = data.orders.find((order) => order.id === Number(body.id));
    if (order) {
      order.status = body.status ?? order.status;
      writeInventory(data);
      return NextResponse.json(order);
    }
  }

  // ➕ Add new inventory item
  if (body.name && body.price !== undefined) {
    const newItem: InventoryItem = {
      id: data.inventory.length + 1,
      name: body.name,
      quantity: body.quantity,
      price: body.price,
      category: body.category,
      status: body.status || "Available",
    };
    data.inventory.push(newItem);
    writeInventory(data);
    return NextResponse.json(newItem, { status: 201 });
  }

  return NextResponse.json({ error: "Invalid request" }, { status: 400 });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const data = readInventory();

  const updatedInventory = data.inventory.filter((item) => item.id !== Number(body.id));
  if (updatedInventory.length === data.inventory.length) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  data.inventory = updatedInventory;
  writeInventory(data);
  return NextResponse.json({ success: true });
}
