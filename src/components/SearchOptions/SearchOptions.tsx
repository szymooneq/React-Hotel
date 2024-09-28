'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SortCard from './SortCard'
import FilterCard from './FilterCard'
import type { SearchOptionsType } from './SearchFilter.types'

// TODO: Update URL search parameters
const SearchOptions = () => {
  const [options, setOptions] = useState<SearchOptionsType>({
    sortBy: null,
    category: null,
    duration: null,
    portions: null,
    kcal: null,
    fats: null,
    carbs: null,
    proteins: null
  })

  return (
    <>
      <div className='hidden sticky top-4 left-4 w-full h-fit basis-[18%] xl:block'>
        <FilterCard className='mb-5' options={options} setOptions={setOptions} />
        <SortCard options={options} setOptions={setOptions} />
      </div>

      <Sheet>
        <SheetTrigger className='xl:hidden' asChild>
          <Button className='fixed top-5 left-5 z-50' variant='outline' size='icon'>
            <span className='sr-only'>Open filters</span>
            <Filter className='size-5' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='w-full overflow-y-auto overflow-x-hidden xl:hidden'>
          <FilterCard className='my-5' options={options} setOptions={setOptions} />
          <SortCard options={options} setOptions={setOptions} />
        </SheetContent>
      </Sheet>
    </>
  )
}

export default SearchOptions