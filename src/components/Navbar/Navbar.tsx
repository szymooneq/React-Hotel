import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { menuItems } from './Navbar.mock'

const Navbar = () => {
  const pathname = '/'

  return (
    <div className='p-4 flex justify-center items-center gap-6 text-sm font-bold bg-gray-100 dark:bg-gray-800'>
      {menuItems.map(item => (
        <Button
          key={item.href}
          variant={pathname === item.href ? 'default' : 'navbar'}
          asChild>
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </div>
  )
}

export default Navbar