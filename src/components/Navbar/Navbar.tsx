import Link from 'next/link'
import { cn } from '@/lib/cn'
import { buttonVariants } from '@/components/ui/button'
import { Dock, DockIcon } from '@/components/magicui/dock'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import ThemeButton from './ThemeButton'
import { navbarItems } from '@/mock/navbar'

const Navbar = () => {
  return (
    <TooltipProvider>
      <Dock direction='middle' className='fixed bottom-5 left-[50%] translate-x-[-50%] z-50'>
        {navbarItems.map(navitem => {
          const { icon: NavIcon } = navitem

          return (
            <DockIcon key={navitem.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={navitem.href}
                    className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full')}>
                    <NavIcon className='size-4' />
                    <span className='sr-only'>{navitem.name}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{navitem.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          )
        })}

        <Separator orientation='vertical' className='h-full' />

        <DockIcon>
          <Tooltip>
            <ThemeButton />
            <TooltipContent>
              <p>Change theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  )
}

export default Navbar