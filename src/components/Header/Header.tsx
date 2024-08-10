'use client'

import { Pacifico } from 'next/font/google'
import { useMemo } from 'react'
import { getHeader } from '@/lib/getHeader'
import { cn } from '@/lib/cn'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Sun } from 'lucide-react'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400'
})

const Header = () => {
  const headerImg = useMemo(() => getHeader(), [])

  return (
    <header className='flex flex-col items-center justify-center gap-3 relative overflow-hidden aspect-[4/5] sm:aspect-[32/9] after:content-[""] after:absolute after:inset-0 after:w-full after:h-full after:bg-black after:opacity-40 after:-z-10'>
      <Image
        className='-z-20 object-cover object-center'
        src={headerImg.src}
        alt=''
        blurDataURL={headerImg.blurDataURL}
        loading='lazy'
        fill />

      <h1 className={cn('text-[3.4rem] text-white', pacifico.className)}>
        Tastebite
      </h1>

      <div className='flex w-full max-w-sm items-center space-x-2 relative px-1'>
        <Input className='py-7 pr-24' type='email' placeholder='Find a recipe...' />
        <Button className='absolute right-[4.2rem]' type='submit'>Search</Button>
        <Button type='button' variant='outline' size='sm'>
          <Sun className='h-5 w-5' />
        </Button>
      </div>
    </header>
  )
}

export default Header