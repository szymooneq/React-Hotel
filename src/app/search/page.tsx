import Navbar from '@/components/Navbar'
import SearchHeader from '@/components/SearchHeader'
import SearchOptions from '@/components/SearchOptions'
import SearchRecipes from '@/components/SearchRecipes'

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <SearchHeader />
      <main className='flex'>
        <SearchOptions />
        <SearchRecipes />
      </main>
    </>
  )
}
