import { memo, useCallback } from 'react'
import { DualRangeSlider } from '@/components/ui/dualrangeslider'
import LabelFilter from './LabelFilter'
import type { RangeFilterProps } from './SearchFilter.types'

const RangeFilter = ({ id, label, value, max, step, setFilters }: RangeFilterProps) => {
  const onValueChange = useCallback((value: Array<number>) => {
    setFilters(current => ({
      ...current,
      [id]: value
    }))
  }, [id, setFilters])

  return (
    <>
      <LabelFilter>{label}</LabelFilter>
      <DualRangeSlider
        className='mb-8'
        label={(value) => value}
        labelPosition='bottom'
        value={value || [0, max]}
        onValueChange={onValueChange}
        min={0}
        max={max}
        step={step} />
    </>
  )
}

export default memo(RangeFilter)