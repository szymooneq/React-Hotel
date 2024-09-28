import Navbar from '@/components/Navbar'
import SearchHeader from '@/components/SearchHeader'
import RecipeSection from '@/components/RecipeSection'
import SearchOptions from '@/components/SearchFilter/SearchOptions'

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <SearchHeader />
      <main className='flex'>
        <div className='sticky top-4 left-4 w-full h-fit basis-[18%]'>
          <SearchOptions />
        </div>
        <div className='basis-[82%]'>
          <RecipeSection />
        </div>
      </main>
    </>
  )
}
