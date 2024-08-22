import header_8 from '@/assets/images/header/header_8.jpg'
import header_9 from '@/assets/images/header/header_9.jpg'

export const recipeMock = {
  id: '1',
  title: 'Barszcz czerwony wigilijny',
  description: 'Dopracowany przez lata do perfekcji. Tradycyjny, intensywny i esencjonalny. Taki powinien być barszcz czerwony wigilijny na prawdziwym, domowym zakwasie buraczanym. Zapraszam po sprawdzony, świąteczny przepis.',
  details: {
    kcal: 120,
    duration: 120,
    portions: 2
  },
  nutrions: {
    fats: 54,
    carbs: 23,
    proteins: 23
  },
  images: [
    {
      url: header_8.src,
      width: header_8.width,
      height: header_8.height
    },
    {
      url: header_9.src,
      width: header_9.width,
      height: header_9.height
    }
  ],
  ingredients: ['Milk', 'Onion', 'Butter'],
  steps: ['Step 1', 'Step 2', 'Step 3'],
  isLiked: false
}