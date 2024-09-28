import Navbar from '@/components/Navbar'
import SearchHeader from '@/components/SearchHeader'
import RecipeSection from '@/components/RecipeSection'
import SearchOptions from '@/components/SearchOptions'

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <SearchHeader />
      <main className='flex'>
        <SearchOptions />
        <div className='basis-[82%]'>
          <RecipeSection />
        </div>
      </main>
    </>
  )
}
