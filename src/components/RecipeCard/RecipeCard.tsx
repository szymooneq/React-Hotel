import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Flame } from 'lucide-react'
import LikeButton from './LikeButton'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { RecipeCardProps } from './RecipeCard.types'

const RecipeCard = ({ id, title, nutrions, duration, cover, isLiked }: RecipeCardProps) => {
  return (
    <Card>
      <CardHeader className='relative gap-2'>
        <Image
          className='h-60 rounded-lg object-cover object-center'
          src={cover.url}
          width={cover.width}
          height={cover.height}
          alt='' />
        <LikeButton isLiked={isLiked} />
        <CardTitle className='line-clamp-1'>{title}</CardTitle>
      </CardHeader>

      <CardContent className='flex gap-2'>
        <Badge className='flex gap-1 items-center text-gray-600 dark:text-gray-300' variant='outline'>
          <Flame className='h-4 w-4' /> {nutrions.kcal} kcal
        </Badge>
        <Badge className='flex gap-1 items-center text-gray-600 dark:text-gray-300' variant='outline'>
          <Clock className='h-4 w-4' /> {duration} min
        </Badge>
      </CardContent>
      
      <CardFooter>
        <Button className='flex items-center gap-2 w-full' asChild>
          <Link href={`/recipe/${id}`}>
            Check <ArrowRight className='mt-[2px] h-4 w-4' />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default RecipeCard