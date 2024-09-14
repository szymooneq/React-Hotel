import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const SearchInput = () => {
  return (
    <div className='w-full relative max-w-[500px]'>
      <label htmlFor='search' className='sr-only'>Find a recipe</label>
      <Input id='search' type='text' placeholder='Start typing...' className='pl-10' />
      <Search className='absolute left-3 top-1/2 -translate-y-1/2 size-4 pointer-events-none text-gray-500 dark:text-gray-400' />
    </div>
  )
}

export default SearchInput