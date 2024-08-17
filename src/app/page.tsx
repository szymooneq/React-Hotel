import Header from '@/components/Header'
import Categories from '@/components/Categories'
import RecipeSection from '@/components/RecipeSection'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className='flex-1 p-4'>
        <Categories />
        <RecipeSection />
      </main>
    </>
  )
}
