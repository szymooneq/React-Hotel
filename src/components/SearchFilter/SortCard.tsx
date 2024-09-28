import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SortSelect from './SortSelect'
import type { SearchCardProps } from './SearchFilter.types'

const SortCard = ({ options, setOptions }: SearchCardProps) => {
  return (
    <Card asChild>
      <section>
        <CardHeader>
          <CardTitle asChild>
            <h2>Sort by</h2>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <SortSelect setOptions={setOptions} />
        </CardContent>
      </section>
    </Card>
  )
}

export default SortCard