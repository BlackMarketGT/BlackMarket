"use client"

import ProductList from "../../components/ProductList";
import React, { useState, useEffect} from 'react'
import { CarouselSpacing } from "../../components/CarouselSpacing";

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

export default function Women() {
    const [products, setProducts] = useState<productsByCategory | null>(null);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data as productsByCategory))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold p-10">All Men's Clothes</h1>
            <ProductList products={products ? products.men : []}/>
            <div className="text-3xl font-bold p-4">Recommended for you →</div>
            <div className="flex justify-center items-center">
                <CarouselSpacing products={products ? products?.recommended : []}/>
            </div>
        </div>
    );
}