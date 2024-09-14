import Navbar from '@/components/Navbar'
import Categories from '@/components/Categories'
import SearchHeader from '@/components/SearchHeader'
import SearchFilter from '@/components/SearchFilter'
import RecipeSection from '@/components/RecipeSection'

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <SearchHeader />
      <main className='flex'>
        <SearchFilter />
        <div className='basis-[80%]'>
          <Categories />
          <RecipeSection />
          <RecipeSection />
          <RecipeSection />
          <RecipeSection />
        </div>
      </main>
    </>
  )
}
