interface RecipePageProps {
  params: {
    recipeId: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  return (
    <div>{params.recipeId}</div>
  )
}