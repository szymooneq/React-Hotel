import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Categories from '@/components/Categories'
import RecipeSection from '@/components/RecipeSection'
import FeaturedSection from '@/components/FeaturedSection'

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <FeaturedSection />
        <Categories />
        <RecipeSection />
      </main>
    </>
  )
}
