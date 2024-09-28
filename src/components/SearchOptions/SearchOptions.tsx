'use client'

import { useState } from 'react'
import FilterCard from './FilterCard'
import SortCard from './SortCard'
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
      <FilterCard options={options} setOptions={setOptions} />
      <SortCard options={options} setOptions={setOptions} />
    </>
  )
}

export default SearchOptions