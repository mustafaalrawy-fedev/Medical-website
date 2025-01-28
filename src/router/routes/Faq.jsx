import React from 'react';
import FaqPage from '../../Layouts/Faq/FaqPage';
import FaqQuestions from '../../Layouts/Faq/FaqQuestions';

const Faq = () => {
  return (
    <>
      <section className='section my-20'>
        <FaqPage />
        <FaqQuestions />
      </section>
    </>
  );
};

export default Faq;
