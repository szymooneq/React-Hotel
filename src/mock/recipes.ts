import type { RecipeCardProps } from '@/components/RecipeCard/RecipeCard.types'

import header_2 from '@/assets/images/header/header_2.jpg'
import header_3 from '@/assets/images/header/header_3.jpg'
import header_4 from '@/assets/images/header/header_4.jpg'

export const recipesMock: Array<RecipeCardProps> = [
  {
    id: '1',
    title: 'Barszcz czerwony wigilijny',
    description: 'Dopracowany przez lata do perfekcji. Tradycyjny, intensywny i esencjonalny. Taki powinien być barszcz czerwony wigilijny na prawdziwym, domowym zakwasie buraczanym. Zapraszam po sprawdzony, świąteczny przepis.',
    duration: 120,
    difficulty: 1,
    cover: {
      url: header_2.src,
      width: header_2.width,
      height: header_2.height
    }
  },
  {
    id: '2',
    title: 'Gofry',
    description: 'Przepyszne. Chrupiące na zewnątrz i mięciutkie ale nie gumowate w środku, moje ulubione.',
    duration: 20,
    difficulty: 1,
    cover: {
      url: header_3.src,
      width: header_3.width,
      height: header_3.height
    }
  },
  {
    id: '3',
    title: 'Puszyste pancakes',
    description: 'Amerykańskie puszyste placuszki. Klasyczne, proste do wykonania, najlepsze na śniadanie lub brunch. Udają się za każdym razem. Do ciasta na placki można wmieszać świeże borówki amerykańskie, jeśli lubicie. Polecam!',
    duration: 40,
    difficulty: 3,
    cover: {
      url: header_4.src,
      width: header_4.width,
      height: header_4.height
    }
  }
]