import * as React from "react"

import Autoplay from "embla-carousel-autoplay"
import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardCarrousel from "./CardCarrousel"


export function ImageCarousel() {
  
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm max-w-lg"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4">
            <div className="p-2">
              <CardCarrousel></CardCarrousel>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
