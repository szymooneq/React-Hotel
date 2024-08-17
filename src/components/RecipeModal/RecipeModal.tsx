'use client'

import { useRouter } from 'next/navigation'
import { Dialog, DialogOverlay, DialogContent } from '@/components/ui/dialog'
import type { RecipeModalProps } from './RecipeModal.types'

const RecipeModal = ({ children }: RecipeModalProps) => {
  const router = useRouter()

  const onOpenChange = () => {
    router.back()
  }

  return (
    <Dialog
      defaultOpen={true}
      open={true}
      onOpenChange={onOpenChange}>
      <DialogOverlay>
        <DialogContent className='overflow-y-hidden'>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

export default RecipeModal