import { memo } from 'react'
import { useTheme } from '@/hooks/useTheme'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { Category } from '@/types/Category'
import type { CategoryFilterProps } from './SearchFilter.types'

import { sortOptions } from '@/mock/sorts'

// TODO: SelectItem remove span
const SortSelect = ({ setOptions }: CategoryFilterProps) => {
  const { isDarkTheme } = useTheme()

  const onChange = (value: Category) => {
    setOptions(current => ({
      ...current,
      sortBy: value
    }))
  }

  return (
    <Select defaultValue='popularity_asc' onValueChange={onChange}>
      <SelectTrigger className='mb-5 text-nowrap'>
        <SelectValue placeholder='Select sort option' />
      </SelectTrigger>

      <SelectContent>
        {sortOptions.map(option => {
          const { icon: OptionIcon } = option

          return (
            <SelectGroup key={option.label}>
              <SelectLabel>{option.label}</SelectLabel>
              <SelectItem value={`${option.value}_asc`}>
                <span className='inline-flex gap-2 items-center line-clamp-1'>
                  <OptionIcon
                    className='size-3'
                    color={isDarkTheme ? '#22c55e' : '#000000'}
                    {...(!isDarkTheme && { fill: '#22c55e' })} />
                  {option.ascending}
                </span>
              </SelectItem>
              <SelectItem value={`${option.value}_desc`}>
                <span className='inline-flex gap-2 items-center line-clamp-1'>
                  <OptionIcon
                    className='size-3'
                    color={isDarkTheme ? '#ce0c0c' : '#000000'}
                    {...(!isDarkTheme && { fill: '#ce0c0c' })} />
                  {option.descending}
                </span>
              </SelectItem>
            </SelectGroup>
          )
        })}
      </SelectContent>
    </Select>
  )
}

export default memo(SortSelect)