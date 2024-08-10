import header_1 from '@/assets/images/header/header_1.jpg'
import header_2 from '@/assets/images/header/header_2.jpg'
import header_3 from '@/assets/images/header/header_3.jpg'
import header_4 from '@/assets/images/header/header_4.jpg'
import header_5 from '@/assets/images/header/header_5.jpg'
import header_6 from '@/assets/images/header/header_6.jpg'
import header_7 from '@/assets/images/header/header_7.jpg'
import header_8 from '@/assets/images/header/header_8.jpg'
import header_9 from '@/assets/images/header/header_9.jpg'
import header_10 from '@/assets/images/header/header_10.jpg'
import header_11 from '@/assets/images/header/header_11.jpg'
import header_12 from '@/assets/images/header/header_12.jpg'
import header_13 from '@/assets/images/header/header_13.jpg'
import header_14 from '@/assets/images/header/header_14.jpg'
import header_15 from '@/assets/images/header/header_15.jpg'

const headerList = [
  header_1,
  header_2,
  header_3,
  header_4,
  header_5,
  header_6,
  header_7,
  header_8,
  header_9,
  header_10,
  header_11,
  header_12,
  header_13,
  header_14,
  header_15
]

export const getHeader = () => {
  const randomIndex = Math.floor(Math.random() * headerList.length)

  return headerList[randomIndex]
}