export interface RecipeCardProps {
  id: string
  title: string
  description: string
  duration: number
  difficulty: 1 | 2 | 3
  cover: {
    url: string
    width: number
    height: number
  }
}