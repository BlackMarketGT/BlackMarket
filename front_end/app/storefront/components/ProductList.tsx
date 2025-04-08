"use client"

import { Card, CardContent } from "@/components/ui/card"
import Product from "../components/Product"

type product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: string;
}

export default function ProductList({products}: {products: product[]}) {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {products?.map((product) => (
                    <Card key={product.id} className="rounded-lg shadow-md">
                        <CardContent className="flex flex-col items-center p-4">
                            <Product product={product} />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}