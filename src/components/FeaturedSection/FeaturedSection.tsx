import FeaturedList from './FeaturedList'

const FeaturedSection = () => {
  return (
    <section className='mb-5 md:mb-10'>
      <h2 className='px-10 mb-2 text-2xl font-bold'>Featured</h2>
      <FeaturedList />
    </section>
  )
}

export default FeaturedSection