import RecipeModal from '@/components/RecipeModal'
import RecipeContent from '@/components/RecipeContent'

interface RecipePageProps {
  params: {
    recipeId: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  return (
    <RecipeModal>
      <RecipeContent />
    </RecipeModal>
  )
}
