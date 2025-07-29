'use client'
import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export default function ImageCarousel({ images }: { images: string[] }) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 2000 })]}
      className='w-full'
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent className='relative flex aspect-square h-96 w-full items-center justify-center p-6'>
                  <Image
                    src={image}
                    alt={`Project Image ${index + 1}`}
                    className='object-contain object-center'
                    fill
                  />
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
