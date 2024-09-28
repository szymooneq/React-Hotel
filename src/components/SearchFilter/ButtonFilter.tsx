import { memo } from 'react'
import { cn } from '@/lib/cn'
import type { ButtonFilterProps } from './SearchFilter.types'

const ButtonFilter = ({ name, color, value, children, isActive, setOptions }: ButtonFilterProps) => {
  const onClick = () => {
    setOptions(current => ({
      ...current,
      [name]: isActive ? null : value
    }))
  }
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        (color === 'blue' && isActive) && 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500',
        (color === 'green' && isActive) && 'text-green-600 border-green-600 dark:text-green-500 dark:border-green-500'
      )}>
      {children}
    </button>
  )
}

export default memo(ButtonFilter)