import Link from 'next/link'
import Image from 'next/image'
import { Clock, Flame } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { recipeMock } from '@/mock/recipe'

const FeaturedCard = () => {
  return (
    <li role='article' className='first-of-type:ml-8 mr-8 flex-grow-0 flex-shrink-0 basis-[80%] relative rounded-lg border text-card-foreground shadow-sm h-96 overflow-hidden bg-transparent md:basis-[50%] lg:basis-[40%] group'>
      <Image
        className='absolute w-full h-full inset-0 object-cover object-center pointer-events-none -z-20'
        src={recipeMock.images[0].url}
        alt=''
        width={recipeMock.images[0].width}
        height={recipeMock.images[0].height} />
        
      <div className='absolute text-left bottom-4 left-4 right-4 z-20 pointer-events-none'>
        <h3 className='mb-2 text-2xl font-bold text-foreground-black'>
          {recipeMock.title}
        </h3>

        <div className='flex flex-col gap-2 xl:flex-row xl:justify-between'>
          <div className='inline-flex items-center gap-1'>
            <Avatar className='border-2 border-white size-8'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className='text-lg text-foreground-black'>Szymon Dudka</p>
          </div>

          <ul className='inline-flex gap-2 self-end xl:self-auto'>
            <li className='inline-flex items-center gap-1 text-foreground-black'>
              <Badge className='flex gap-1 items-center text-foreground-black border-foreground-black' variant='outline'>
                <Flame className='size-4' /> 120 kcal
              </Badge>
            </li>
            <li className='inline-flex items-center gap-1 text-foreground-black'>
              <Badge className='flex gap-1 items-center text-foreground-black border-foreground-black' variant='outline'>
                <Clock className='size-4' /> 120 min
              </Badge>
            </li>
          </ul>
        </div>
      </div>

      <Link href='/recipe/1' className='absolute inset-0 after:content-[""] after:block after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-white after:opacity-50 after:transition-opacity group-hover:after:opacity-10'>
        <span className='sr-only'>Check</span>
      </Link>
    </li>
  )
}

export default FeaturedCard