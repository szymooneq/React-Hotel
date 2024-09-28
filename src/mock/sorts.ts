import { Clock, Flame, Heart } from 'lucide-react'

export const sortOptions = [
  {
    label: 'Popularity',
    value: 'popularity',
    icon: Heart,
    ascending: 'From the most popular',
    descending: 'From the least popular'
  },
  {
    label: 'Duration',
    value: 'duration',
    icon: Clock,
    ascending: 'From the longest duration',
    descending: 'From the shortest duration'
  },
  {
    label: 'Kcal',
    value: 'kcal',
    icon: Flame,
    ascending: 'From the highest calories',
    descending: 'From the smallest calories'
  }
]