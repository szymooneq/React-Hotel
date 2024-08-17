import { Sun } from 'lucide-react'

const Header = () => {
  return (
    <header className='p-4'>
      <p className='inline-flex gap-2 items-center text-2xl'>
        <Sun className='w-6 h-6 text-primary' /> Good morning
      </p>
      <h1 className='text-4xl font-bold'>Szymon Dudka</h1>
    </header>
  )
}

export default Header