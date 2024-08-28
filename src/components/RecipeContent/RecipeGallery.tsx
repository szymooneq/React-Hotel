'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/cn'
import { useEmblaButton } from '@/hooks/useEmblaButton'
import { Button } from '@/components/ui/button'
import type { RecipeGalleryProps } from './RecipeContent.types'

const RecipeGallery = ({ images }: RecipeGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const { selectedIndex, scrollSnaps, onButtonClick } = useEmblaButton(emblaApi)

  return (
    <section className='relative'>
      <div className='overflow-hidden' ref={emblaRef}>
        <ul className='flex'>
          {images.map((image, idx) => (
            <li key={idx} className='flex-grow-0 flex-shrink-0 basis-full'>
              <Image
                className='w-full h-[26rem] object-cover object-center pointer-events-none'
                src={image.url}
                alt=''
                width={image.width}
                height={image.height} />
            </li>
          ))}
        </ul>
      </div>

      <div className='flex justify-center items-center gap-3 absolute left-0 right-0 bottom-6'>
        {scrollSnaps.map((_, idx) => (
          <Button
            key={idx}
            type='button'
            variant='recipeGalleryDots'
            onClick={() => onButtonClick(idx)}
            className={cn('p-0 size-3', idx === selectedIndex ? 'opacity-100' : 'opacity-50')}>
            <span className='sr-only'>{`Go to slide ${idx + 1}`}</span>
          </Button>
        ))}
      </div>
    </section>
  )
}

export default RecipeGallery