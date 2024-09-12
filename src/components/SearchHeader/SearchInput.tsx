import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SearchInput = () => {
  return (
    <div className='inline-flex gap-2 w-full relative max-w-[500px]'>
      <Input type='text' placeholder='Search recipe...' className='pl-10' />
      <Search className='absolute left-3 top-1/2 -translate-y-1/2 size-4 pointer-events-none text-gray-500 dark:text-gray-400' />
      <Button type='button'>Search</Button>
    </div>
  )
}

export default SearchInput