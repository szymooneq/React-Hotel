import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpNarrowWide, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { RecipeCardProps } from './RecipeCard.types'

const RecipeCard = ({ id, title, description, duration, difficulty, cover }: RecipeCardProps) => {
  const difficultyMap = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard'
  }

  return (
    <Card>
      <Image
        className='h-60 rounded-t-lg object-cover object-center'
        src={cover.url}
        width={cover.width}
        height={cover.height}
        alt='' />
      <CardHeader>
        <CardTitle className='line-clamp-1'>{title}</CardTitle>
        <div className='inline-flex gap-2'>
          <Badge className='flex gap-1 items-center' variant='outline'>
            <Clock className='h-4 w-4' /> {duration} min
          </Badge>
          <Badge className='flex gap-1 items-center' variant='outline'>
            <ArrowUpNarrowWide className='h-4 w-4' /> {difficultyMap[difficulty]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className='line-clamp-3'>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/${id}`}>Check</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default RecipeCard