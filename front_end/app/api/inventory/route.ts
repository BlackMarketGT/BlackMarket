import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "app/api/inventory/data.json");

async function readInventory() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeInventory(data: any[]) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const inventory = await readInventory();
  return NextResponse.json(inventory);
}

export async function POST(req: Request) {
  const body = await req.json();
  const inventory = await readInventory();

  if (body.update && body.id !== undefined) {
    const item = inventory.find((item: any) => item.id === Number(body.id));
    if (item) {
      item.quantity = body.quantity;
      await writeInventory(inventory);
      return NextResponse.json(item);
    } else {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }
  }

  const newItem = body;
  newItem.id = inventory.length > 0 ? inventory[inventory.length - 1].id + 1 : 1;
  inventory.push(newItem);
  await writeInventory(inventory);
  return NextResponse.json(newItem, { status: 201 });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const inventory = await readInventory();

  const index = inventory.findIndex((item: any) => item.id === Number(body.id));
  if (index !== -1) {
    const removed = inventory.splice(index, 1)[0];
    await writeInventory(inventory);
    return NextResponse.json({ success: true, removed });
  } else {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
}
