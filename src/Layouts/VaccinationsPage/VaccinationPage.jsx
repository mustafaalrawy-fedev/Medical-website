import React from 'react';
import VaccinationSchedule from './VaccinationSchedule';
import SortByAge from './SortByAge';

const VaccinationPage = () => {
  return (
    <>
      <section className='section'>
        <VaccinationSchedule />
        <SortByAge />
      </section>
    </>
  );
};

export default VaccinationPage;
