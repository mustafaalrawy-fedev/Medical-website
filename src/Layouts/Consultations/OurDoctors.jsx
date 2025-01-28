import { useState } from 'react';
import SearchForm from './SearchForm';
import DoctorsInfo from './DoctorsInfo';

const OurDoctors = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <article className='flex items-center gap-16'>
        <h1 className='headings'>
          Our<span className='text-primary'> Doctors</span>
        </h1>
        <SearchForm
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
      </article>
      <DoctorsInfo />
    </>
  );
};

export default OurDoctors;
