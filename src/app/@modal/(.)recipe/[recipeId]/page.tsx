import RecipeModal from '@/components/RecipeModal'

interface RecipePageProps {
  params: {
    recipeId: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  return (
    <RecipeModal>{params.recipeId}</RecipeModal>
  )
}
