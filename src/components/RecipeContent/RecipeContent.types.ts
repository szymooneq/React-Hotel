export interface RecipeDetailsProps {
  details: {
    kcal: number
    duration: number
    portions: number
  }
  nutrions: {
    fats: number
    carbs: number
    proteins: number
  }
}

export interface RecipeGalleryProps {
  images: Array<{ url: string, width: number, height: number }>
}