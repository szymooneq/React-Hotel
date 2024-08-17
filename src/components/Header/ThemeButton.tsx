'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/button'

const ThemeButton = () => {
  const { isDarkTheme, setTheme } = useTheme()

  const onChangeTheme = () => {
    const newValue = isDarkTheme ? 'light' : 'dark'
    setTheme(newValue)
  }

  return (
    <Button type='button' variant='outline' size='sm' onClick={onChangeTheme}>
      {isDarkTheme ? (
        <Moon className='h-5 w-5' />
      ) : (
        <Sun className='h-5 w-5' />
      )}
      <span className='sr-only'>
        {isDarkTheme ? 'Light mode' : 'Dark mode'}
      </span>
    </Button>
  )
}

export default ThemeButton