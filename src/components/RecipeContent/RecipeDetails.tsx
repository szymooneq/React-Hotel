'use client'

import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts'
import { Clock, Flame, UtensilsCrossed } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ChartContainer } from '@/components/ui/chart'
import { Separator } from '@/components/ui/separator'
import type { RecipeDetailsProps } from './RecipeContent.types'

const RecipeDetails = ({ details, nutrions }: RecipeDetailsProps) => {
  const { kcal, duration, portions } = details
  const { fats, carbs, proteins } = nutrions

  const totalNutrions = fats + carbs + proteins

  const nutrionsData = [
    {
      nutrion: 'Fats',
      value: (fats / totalNutrions) * 100,
      label: `${fats}g`,
      fill: 'var(--color-fats)'
    },
    {
      nutrion: 'Carbs',
      value: (carbs / totalNutrions) * 100,
      label: `${carbs}g`,
      fill: 'var(--color-carbs)'
    },
    {
      nutrion: 'Proteins',
      value: (proteins / totalNutrions) * 100,
      label: `${proteins}g`,
      fill: 'var(--color-proteins)'
    }
  ]

  return (
    <Card className='my-5'>
      <CardContent className='flex gap-4 p-4 pb-2'>
        <ChartContainer
          config={{
            fats: {
              label: 'Fats',
              color: 'hsl(var(--chart-1))',
            },
            carbs: {
              label: 'Carbs',
              color: 'hsl(var(--chart-2))',
            },
            proteins: {
              label: 'Proteins',
              color: 'hsl(var(--chart-3))',
            }
          }}
          className='h-[140px] w-full'>
          <BarChart
            data={nutrionsData}
            layout='vertical'
            barSize={32}
            barGap={2}>

            <XAxis type='number' dataKey='value' hide />
            <YAxis
              dataKey='nutrion'
              type='category'
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              className='capitalize' />

            <Bar dataKey='value' radius={5}>
              <LabelList
                position='center'
                dataKey='label'
                fill='white'
                offset={8}
                fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex flex-row border-t p-4'>
        <div className='flex w-full items-center gap-2'>
          <div className='grid flex-1 auto-rows-min gap-0.5'>
            <div className='inline-flex items-center gap-1 text-xs text-muted-foreground'>
              <Flame className='size-3' /> Energy
            </div>
            <div className='flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none'>
              {kcal}
              <span className='text-sm font-normal text-muted-foreground'>
                kcal
              </span>
            </div>
          </div>
          <Separator orientation='vertical' className='mx-2 h-10 w-px' />
          <div className='grid flex-1 auto-rows-min gap-0.5'>
            <div className='inline-flex items-center gap-1 text-xs text-muted-foreground'>
              <Clock className='size-3' /> Duration
            </div>
            <div className='flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none'>
              {duration}
              <span className='text-sm font-normal text-muted-foreground'>
                min
              </span>
            </div>
          </div>
          <Separator orientation='vertical' className='mx-2 h-10 w-px' />
          <div className='grid flex-1 auto-rows-min gap-0.5'>
            <div className='inline-flex items-center gap-1 text-xs text-muted-foreground'>
              <UtensilsCrossed className='size-3' /> Portions
            </div>
            <div className='flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none'>
              {portions}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RecipeDetails