'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'
import type { RecipeGalleryProps } from './RecipeContent.types'

const SWIPER_SETTINGS: SwiperProps = {
  modules: [Pagination, A11y],
  allowTouchMove: true,
  simulateTouch: true,
  slidesPerView: 1,
  wrapperTag: 'ul',
  pagination: {
    clickable: true,
    type: 'bullets'
  }
}

const RecipeGallery = ({ images }: RecipeGalleryProps) => {
  return (
    <Swiper {...SWIPER_SETTINGS}>
      {images.map((image, idx) => (
        <SwiperSlide key={idx} tag='li'>
          <Image
            className='w-full h-[26rem] object-cover object-center pointer-events-none'
            src={image.url}
            alt=''
            width={image.width}
            height={image.height} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default RecipeGallery