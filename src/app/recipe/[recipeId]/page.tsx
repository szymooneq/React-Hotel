import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

interface RecipePageProps {
  params: {
    recipeId: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  return (
    <>
      <Header />
      <Navbar />
      <main className='flex-1'>
        {params.recipeId}
      </main>
    </>
  )
}
