'use client'

import { useCallback, useState } from 'react'
import { ChefHat, ChevronDown, Clock, UtensilsCrossed } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import RangeFilter from './RangeFilter'
import LabelFilter from './LabelFilter'
import ButtonFilter from './ButtonFilter'
import CategoryFilter from './CategoryFilter'
import type { SearchCardProps } from './SearchFilter.types'

import { durationFilters, portionsFilters } from '@/mock/filters'

const FilterCard = ({ className, options, setOptions }: SearchCardProps) => {
  const [isNutrionsExpand, setIsNutrionsExpand] = useState(false)

  const onNutrionsExpand = useCallback((open: boolean) => {
    setIsNutrionsExpand(open)

    if (!open) {
      setOptions(current => ({
        ...current,
        kcal: null,
        fats: null,
        carbs: null,
        proteins: null
      }))
    }
  }, [setOptions])

  return (
    <Card className={className} asChild>
      <section>
        <CardHeader>
          <CardTitle asChild>
            <h2>Filters</h2>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <LabelFilter>
            <ChefHat className='size-4' /> Category
          </LabelFilter>
          <CategoryFilter setOptions={setOptions} />

          <LabelFilter>
            <Clock className='size-4' /> Duration
          </LabelFilter>
          <div className='mb-5 inline-flex gap-2 w-full'>
            {durationFilters.map((durationItem, idx) => (
              <ButtonFilter
                key={idx}
                color='blue'
                name='duration'
                value={durationItem.value}
                isActive={options.duration === durationItem.value}
                setOptions={setOptions}>
                {durationItem.label}
              </ButtonFilter>
            ))}
          </div>

          <LabelFilter>
            <UtensilsCrossed className='size-4' /> Portions
          </LabelFilter>
          <div className='mb-5 inline-flex gap-2 w-full'>
            {portionsFilters.map((portionsItem, idx) => (
              <ButtonFilter
                key={idx}
                color='green'
                name='portions'
                value={portionsItem.value}
                isActive={options.portions === portionsItem.value}
                setOptions={setOptions}>
                {portionsItem.label}
              </ButtonFilter>
            ))}
          </div>

          <Collapsible open={isNutrionsExpand} onOpenChange={onNutrionsExpand}>
            <CollapsibleTrigger asChild>
              <Button variant='outline' className='mb-2 py-1 inline-flex items-center gap-1 w-full h-fit'>
                <span className='sr-only'>Toggle</span>
                Nutrions
                <ChevronDown className={cn('size-4 transition-transform', isNutrionsExpand && 'rotate-180')} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className={cn(
              'overflow-hidden px-2',
              isNutrionsExpand && 'animate-collapsible-down',
              !isNutrionsExpand && 'animate-collapsible-up'
              )}>
              <RangeFilter
                id='kcal'
                label='Kcal'
                max={2000}
                step={10}
                value={options.kcal}
                setOptions={setOptions} />

              <RangeFilter
                id='fats'
                label='Fats'
                max={200}
                step={1}
                value={options.fats}
                setOptions={setOptions} />

              <RangeFilter
                id='carbs'
                label='Carbs'
                max={200}
                step={1}
                value={options.carbs}
                setOptions={setOptions} />

              <RangeFilter
                id='proteins'
                label='Proteins'
                max={200}
                step={1}
                value={options.proteins}
                setOptions={setOptions} />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </section>
    </Card>
  )
}

export default FilterCard