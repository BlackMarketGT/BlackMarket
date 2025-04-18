"use client";

import { useParams } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: string;
};

export default function ProductDetails() {
    const params = useParams();
    const id = params.id;

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        // Fetch the static JSON file
        fetch('/products.json') // Static JSON file in the public directory
            .then((response) => response.json())
            .then((data: Product[]) => {
                // Find the product with the matching id
                const allProducts = Object.values(data).flat();
                // Find the product with the matching id
                const foundProduct = allProducts.find((item: Product) => item.id === id);
                setProduct(foundProduct || null);
            })
            .catch((error) => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>; // Show a loading state or "Product not found" message
    }

    return (
        <div className="flex items-center justify-center p-8">
            <Image 
                src={product.image}
                alt="product"
                className="items-center justify-center rounded-md m-8" 
                width={500}
                height={500}
            />
            <div>
                <div className="">
                    <div className=" text-5xl font-bold p-4 ">{product.name}</div>
                    <div className="text-2xl font-bold p-4">${product.price}</div>
                    <Button className="m-4">Add to cart &rarr;</Button>
                </div>
            </div>

        </div>
    );
}