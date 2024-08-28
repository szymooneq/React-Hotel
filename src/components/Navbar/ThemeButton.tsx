'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/button'
import { TooltipTrigger } from '@/components/ui/tooltip'

const ThemeButton = () => {
  const { isDarkTheme, setTheme } = useTheme()

  const onChangeTheme = () => {
    const newValue = isDarkTheme ? 'light' : 'dark'
    setTheme(newValue)
  }

  return (
    <TooltipTrigger asChild>
      <Button
        type='button'
        variant='ghost'
        size='icon'
        className='size-12 rounded-full'
        onClick={onChangeTheme}>
        {isDarkTheme ? (
          <Moon className='size-4' />
        ) : (
          <Sun className='size-4' />
        )}
        <span className='sr-only'>
          {isDarkTheme ? 'Light mode' : 'Dark mode'}
        </span>
      </Button>
    </TooltipTrigger>
  )
}

export default ThemeButton