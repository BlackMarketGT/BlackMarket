import Image from 'next/image';

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
    return (
        <div>
            <Image className='rounded-md' src={product.image} alt="product" width={500} height={500} />
            <div className="flex text-xl font-bold pt-2 pb-1">{product.name}</div>
            <div className="flex text-md pt-1 pb-2">${product.price}</div>
        </div>
    )
}