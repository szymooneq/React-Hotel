export interface RecipeCardProps {
  id: string
  title: string
  description: string
  duration: number
  nutrions: {
    kcal: number
    fats: number
    carbs: number
    proteins: number
  }
  cover: {
    url: string
    width: number
    height: number
  }
  isLiked: boolean
}

export interface LikeButtonProps {
  isLiked: boolean
}