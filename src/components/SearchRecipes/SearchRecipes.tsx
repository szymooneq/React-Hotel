import RecipeCard from '@/components/RecipeCard'

import { recipesMock } from '@/mock/recipes'

const SearchRecipes = () => {
  return (
    <ul className='px-5 mb-5 md:px-10 grid gap-7 md:mx-0 md:grid-cols-2 lg:grid-cols-3 xl:basis-[82%] xl:grid-cols-3 2xl:grid-cols-4'>
      {recipesMock.map(recipe => (
        <li key={recipe.id}>
          <RecipeCard {...recipe} />
        </li>
      ))}
    </ul>
  )
}

export default SearchRecipes