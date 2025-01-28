import searchIcon from '/Images/Icons/consultations/search.svg';

const SearchForm = ({ handleSearchChange, searchQuery }) => {
  return (
    <>
      <form className='mt-6 flex items-center lg:basis-2/5 basis-full'>
        <div className='relative w-full'>
          <input
            type='text'
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Search'
            className='w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary'
          />
          <img
            src={searchIcon}
            alt='searchIcon'
            className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5'
          />
        </div>
      </form>
    </>
  );
};

export default SearchForm;
