'use client'

import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/button'

import { Sun, Moon } from 'lucide-react'

const ThemeButton = () => {
  const { value, setValue } = useTheme()

  const isDarkTheme = value === 'dark'

  const onChangeTheme = () => {
    const newValue = isDarkTheme ? 'light' : 'dark'
    setValue(newValue)
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