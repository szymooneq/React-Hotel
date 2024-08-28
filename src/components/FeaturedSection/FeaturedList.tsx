'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/cn'
import { useEmblaButton } from '@/hooks/useEmblaButton'
import { Button } from '@/components/ui/button'
import FeaturedCard from '@/components/FeaturedCard'

const FeaturedList = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ playOnInit: true, delay: 5000 })
  ])

  const { selectedIndex, scrollSnaps, onButtonClick } = useEmblaButton(emblaApi)

  return (
    <div className='relative'>
      <div className='overflow-hidden' ref={emblaRef}>
        <ul className='flex'>
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </ul>
      </div>

      <div className='hidden md:flex justify-center items-center gap-3 absolute left-0 right-0 -bottom-8'>
        {scrollSnaps.map((_, idx) => (
          <Button
            key={idx}
            type='button'
            variant='recipeGalleryDots'
            onClick={() => onButtonClick(idx)}
            className={cn('p-0 w-24 h-2 bg-foreground transition-all', idx === selectedIndex ? 'opacity-100' : 'opacity-50')}>
            <span className='sr-only'>{`Go to slide ${idx + 1}`}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default FeaturedList