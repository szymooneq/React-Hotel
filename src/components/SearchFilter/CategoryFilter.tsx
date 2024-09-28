import { memo } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { Category } from '@/types/Category'
import type { CategoryFilterProps } from './SearchFilter.types'

import { categoriesMock } from '@/mock/categories'

// TODO: SelectItem remove span
const CategoryFilter = ({ setOptions }: CategoryFilterProps) => {
  const onChange = (value: Category) => {
    setOptions(current => ({
      ...current,
      category: value
    }))
  }

  return (
    <Select defaultValue='all' onValueChange={onChange}>
      <SelectTrigger className='mb-5 text-nowrap'>
        <SelectValue placeholder='Select category' />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value='all'>All</SelectItem>

        {categoriesMock.map(category => {
          const { icon: CategoryIcon } = category

          return (
            <SelectItem key={category.id} value={category.id}>
              <span className='inline-flex gap-2 items-center line-clamp-1'>
                <CategoryIcon className='size-3' /> {category.title}
              </span>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

export default memo(CategoryFilter)