"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

type ProductProps = {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
        category?: string;
    }
}

export default function Product({ product }: ProductProps) {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Ensure the component is mounted on the client
    }, []);

    const handleClick = () => {
        if (isMounted) {
            router.push(`/storefront/product_details/${product.id}`); // Navigate to the product details page
        }  
    };

    return (
        <div onClick={handleClick} className="cursor-pointer">
            <Image className='rounded-md aspect-square' src={product.image} alt="product" width={500} height={500} />
            <div className="flex text-xl font-bold pt-2 pb-1">{product.name}</div>
            <div className="flex text-md pt-1 pb-2">${product.price}</div>
        </div>
    )
}