"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export function CarouselWide() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full m-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        <CarouselItem key={1}>
          <div className="p-1">
            <Card>
              <CardContent 
                className="flex relative aspect-video items-center justify-start h-full bg-cover bg-center rounded-2xl "
                style={{ backgroundImage: "url('/images/carousel1.jpg')" }}
              >
                <div className="text-left absolute top-1/4 pl-40">
                  <div className="text-5xl pb-3">New Arrivals</div>
                  <div className="text-md pb-3">Explore latest arrivals to elevate your style.</div>
                  <Button>Shop now &rarr;</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={2}>
          <div className="p-1">
            <Card>
              <CardContent 
                className="flex relative aspect-video items-center justify-start h-full bg-cover bg-center rounded-2xl "
                style={{ backgroundImage: "url('/images/carousel2.jpg')" }}
              >
                <div className="text-left absolute top-1/4 pl-40">
                  <div className="text-5xl pb-3">New Jackets</div>
                  <div className="text-md pb-3">Unveil our latest jacket collection: crafted for style, perfected for comfort.</div>
                  <Button>Shop now &rarr;</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={3}>
          <div className="p-1">
            <Card>
              <CardContent 
                className="flex relative aspect-video items-center justify-start h-full bg-cover bg-center rounded-2xl "
                style={{ backgroundImage: "url('/images/carousel3.jpeg')" }}
              >
                <div className="text-right text-black absolute top-1/4 right-20 pl-40">
                  <div className="text-5xl pb-3">Shop Men's Bottoms</div>
                  <div className="text-md pb-3">Explore our men's bottoms: modern cuts designed for superior comfort.</div>
                  <Button>Shop now &rarr;</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
