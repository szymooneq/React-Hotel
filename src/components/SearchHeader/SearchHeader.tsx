import SearchInput from './SearchInput'

const SearchHeader = () => {
  return (
    <header className='my-10 px-5 flex flex-col items-center'>
      <h1 className='mb-3 text-4xl font-bold text-center'>Search</h1>
      <SearchInput />
    </header>
  )
}

export default SearchHeader