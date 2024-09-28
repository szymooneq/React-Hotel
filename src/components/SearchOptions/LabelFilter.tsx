import { cn } from '@/lib/cn'
import { labelVariants } from '@/components/ui/label'
import type { LabelFilterProps } from './SearchFilter.types'

const LabelFilter = ({ children }: LabelFilterProps) => {
  return (
    <span className={cn(labelVariants(), 'mb-2 inline-flex items-center gap-1')}>
      {children}
    </span>
  )
}

export default LabelFilter