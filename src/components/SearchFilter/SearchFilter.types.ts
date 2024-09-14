import type { Dispatch, ReactNode, SetStateAction } from 'react'
import type { Category } from '@/types/Category'

export interface ButtonFilterProps {
  name: 'duration' | 'portions'
  color: 'blue' | 'green'
  value: number | Array<number>
  children: ReactNode
  isActive: boolean
  setFilters: Dispatch<SetStateAction<Filters>>
}

export interface CategoryFilterProps {
  setFilters: Dispatch<SetStateAction<Filters>>
}

export interface RangeFilterProps {
  id: 'kcal' | 'fats' | 'carbs' | 'proteins'
  label: string
  max: number
  step: number
  value: Array<number> | null
  setFilters: Dispatch<SetStateAction<Filters>>
}

export interface LabelFilterProps {
  children: ReactNode
}

export type Filters = {
  category: Category | null
  duration: number | Array<number> | null
  portions: number | Array<number> | null
  kcal: Array<number> | null
  fats: Array<number> | null
  carbs: Array<number> | null
  proteins: Array<number> | null
}