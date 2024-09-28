'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/button'
import type { LikeButtonProps } from './RecipeCard.types'

const LikeButton = ({ isLiked, className = '' }: LikeButtonProps) => {
  const [isLikedState, setIsLikedState] = useState(isLiked)
  const { isDarkTheme } = useTheme()

  const onClick = () => {
    // TODO: API call, update isLiked in database
    setIsLikedState(current => !current)
  }

  const fillColor = isLikedState ? '#ce0c0c' : 'transparent'
  const strokeColor = isLikedState
    ? '#ce0c0c'
    : isDarkTheme ? '#ffffff' : '#000000'

  return (
    <Button
      className={className}
      variant='outline'
      size='icon'
      onClick={onClick}>
      <Heart className='size-5' fill={fillColor} color={strokeColor}  />
      <span className='sr-only'>Like</span>
    </Button>
  )
}

export default LikeButton