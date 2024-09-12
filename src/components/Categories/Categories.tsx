import { Button } from '@/components/ui/button'
import { categoriesMock } from '@/mock/categories'

const Categories = () => {
  return (
    <section className='mb-5'>
      <h2 className='mb-2 px-5 text-2xl font-bold md:px-10'>Categories</h2>
      <ul className='px-5 flex gap-4 overflow-auto md:px-10'>
        {categoriesMock.map(category => (
          <li key={category.id}>
            <Button className='text-md rounded-full gap-2' variant='outline'>
              <category.icon className='w-4 h-4' /> {category.title}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Categories