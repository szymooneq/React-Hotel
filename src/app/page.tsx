import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Categories from '@/components/Categories'
import RecipeSection from '@/components/RecipeSection'

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
