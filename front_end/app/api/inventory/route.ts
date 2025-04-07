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

const dataPath = path.join(process.cwd(), "app/api/inventory/data.json");

function readInventory(): InventoryItem[] {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeInventory(data: InventoryItem[]) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const inventory = readInventory();
  return NextResponse.json(inventory);
}

export async function POST(req: Request) {
  const body = await req.json();
  const inventory = readInventory();

  if (body.update && body.id !== undefined) {
    const item: InventoryItem | undefined = inventory.find(
      (inv: InventoryItem) => inv.id === Number(body.id)
    );
    if (item) {
      item.quantity = body.quantity ?? item.quantity;
      item.price = body.price ?? item.price;
      item.status = body.status ?? item.status;
      item.category = body.category ?? item.category;
      writeInventory(inventory);
      return NextResponse.json(item);
    } else {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }
  }

  const newItem: InventoryItem = {
    id: inventory.length + 1,
    name: body.name,
    quantity: body.quantity,
    price: body.price,
    category: body.category,
    status: body.status || "pending",
  };

  inventory.push(newItem);
  writeInventory(inventory);
  return NextResponse.json(newItem, { status: 201 });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const inventory = readInventory();

  const updated = inventory.filter((item) => item.id !== Number(body.id));
  if (updated.length === inventory.length) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  writeInventory(updated);
  return NextResponse.json({ success: true });
}
