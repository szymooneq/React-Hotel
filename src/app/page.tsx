import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import RecipeCard from '@/components/RecipeCard'
import { recipesMock } from '@/mock/recipes'

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className='flex-1'>
        <ul className='px-4 py-10 grid gap-7 md:mx-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          {recipesMock.map(recipe => (
            <li key={recipe.id}>
              <RecipeCard {...recipe} />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
