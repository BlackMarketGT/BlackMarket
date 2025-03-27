"use client"

import { CarouselSpacing } from "./components/CarouselSpacing"
import { CarouselWide } from "./components/CarouselWide"
import { Card, CardContent } from "@/components/ui/card"
import Product from "./components/Product"

import React, { useState, useEffect, use } from 'react'

type product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: string;
}

type productsByCategory = {
    recommended: product[];
    trending: product[];
    men: product[];
    women: product[];
    accessories: product[];
}

export default function Storefront() {
    const [products, setProducts] = useState<productsByCategory | null>(null);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data as productsByCategory))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="m-10 justify-center items-center">
            <div className="flex justify-center items-center text-5xl font-bold p-8">Greetings Guest, Let's dress to impress.</div>
            <div className="flex w-full justify-center items-center">
                <CarouselWide / >
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full mx-auto justify-center items-center p-4">
                    <div className="text-3xl font-bold p-4">Trending now</div>
                    <div className="flex justify-center items-center">
                        {products?.trending.map((product) => (
                            <Card key={product.id} className="flex w-full justify-center items-center">
                                <CardContent className="flex aspect-square items-center justify-center">
                                    <Product product={product} />
                                </CardContent>
                            </Card>
                        ))};
                    </div>
                    <div className="text-3xl font-bold p-4">Recommended for you →</div>
                    <div className="flex justify-center items-center">
                        <CarouselSpacing products={products ? products?.recommended : []}/>
                    </div>
                </div>
            </div>
        </div>
    )
}