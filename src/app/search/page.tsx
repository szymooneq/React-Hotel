import SearchHeader from '@/components/SearchHeader'
import Navbar from '@/components/Navbar'
import Categories from '@/components/Categories'
import RecipeSection from '@/components/RecipeSection'

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <SearchHeader />
      <main>
        <Categories />
        <RecipeSection />
      </main>
    </>
  )
}
