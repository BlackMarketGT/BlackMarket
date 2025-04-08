"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import Product from "../components/Product"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}


export function CarouselSpacing({products}: {products: product[]}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-8xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        {products?.map((product) => (
          <CarouselItem key={product.id} className={`md:basis-1/4 lg:basis-1/5`}>
            <div className="flex p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <Product product={product}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
