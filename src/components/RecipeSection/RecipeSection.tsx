import RecipeCard from '@/components/RecipeCard'
import { recipesMock } from '@/mock/recipes'

const RecipeSection = () => {
  return (
    <section>
      <h2 className='mb-2 text-2xl font-bold'>Popular Recipes</h2>
      <ul className='grid gap-7 md:mx-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {recipesMock.map(recipe => (
          <li key={recipe.id}>
            <RecipeCard {...recipe} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RecipeSection