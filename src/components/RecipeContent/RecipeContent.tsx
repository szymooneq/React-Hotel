import RecipeGallery from './RecipeGallery'
import RecipeDetails from './RecipeDetails'
import LikeButton from '@/components/RecipeCard/LikeButton'
import { DialogTitle } from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { recipeMock } from '@/mock/recipe'

const RecipeContent = () => {
  return (
    <article className='w-full max-w-[inherit] min-w-[380px] sm:rounded-lg md:overflow-hidden'>
      <RecipeGallery images={recipeMock.images} />

      <LikeButton className='absolute left-12 top-12' isLiked={true} />

      <header className='-mt-4 pt-8 px-10 relative rounded-t-md bg-background'>
        <DialogTitle className='mb-1 text-3xl font-bold' asChild>
          <h2>{recipeMock.title}</h2>
        </DialogTitle>
        <p className='text-sm italic text-gray-600 dark:text-gray-300'>
          {recipeMock.description}
        </p>
      </header>

      <div className='px-10 pb-10'>
        <RecipeDetails details={recipeMock.details} nutrions={recipeMock.nutrions} />

        <Tabs defaultValue='ingredients' asChild>
          <section>
            <TabsList className='w-full'>
              <TabsTrigger value='ingredients' className='flex-1'>
                Ingredients
              </TabsTrigger>
              <TabsTrigger value='instructions' className='flex-1'>
                Instructions
              </TabsTrigger>
            </TabsList>
            <TabsContent value='ingredients'>
              <h3 className='mb-2 text-2xl font-bold'>Ingredients</h3>
              <ul className='list-disc'>
                {recipeMock.ingredients.map((ingredient, idx) => (
                  <li key={idx} className='ml-5'>{ingredient}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value='instructions'>
              <h3 className='mb-2 text-2xl font-bold'>Instructions</h3>
              <ol className='list-decimal'>
                {recipeMock.steps.map((step, idx) => (
                  <li key={idx} className='ml-5'>{step}</li>
                ))}
              </ol>
            </TabsContent>
          </section>
        </Tabs>
        
        <section>
          <h3 className='mt-5 mb-2 text-2xl font-bold'>Creator</h3>
          <div className='flex items-center gap-2'>
            <Avatar className='border-2 border-primary size-14'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className='text-xl'>Szymon Dudka</h4>
              <p className='text-sm text-gray-600 dark:text-gray-300'>
                I&apos;m the author and recipe developer.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

export default RecipeContent