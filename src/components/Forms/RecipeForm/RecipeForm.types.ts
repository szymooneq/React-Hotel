import { IRecipe } from '@/lib/types/Recipe.types'

export interface RecipeFormProps {
	initialValues: IRecipe
	onSubmit: (values: IRecipe) => void
}
