import { motion } from 'motion/react';
import vaccinationScheduleImg1 from '/Images/vaccinationSchedule1.png';
import vaccinationScheduleImg2 from '/Images/vaccinationSchedule2.png';
import vaccinationScheduleImg3 from '/Images/vaccinationSchedule3.png';
import { useEffect, useState } from 'react';

const images = [
  vaccinationScheduleImg1,
  vaccinationScheduleImg2,
  vaccinationScheduleImg3,
];

const VaccinationSchedule = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className='h-full lg:h-screen'>
        <h1 className='headings'>
          Vaccination <span>Schedule</span>
        </h1>
        <article className='pl-3 flex lg:justify-between justify-center gap-5 w-full h-fit lg:flex-nowrap flex-wrap-reverse'>
          <main className='text-text-color font-bold flex flex-col gap-10 lg:mb-0 mb-20 relative'>
            <h2 className='text-2xl md:text-4xl leading-snug z-10'>
              Why is following your Schedule
              <br />
              vaccinations with us the best
              <br />
              choice for Your protection ?
            </h2>
            <p>
              vaccinations protect you from serious diseases . Discover
              <br />
              the appropriate vaccination schedules based on your
              <br />
              Time and receive personalized reminders.
            </p>
            <div className='absolute z-0 w-20 h-20 md:w-24 md:h-24 left-2 md:left-32 lg:-left-5 top-5 bg-main-color rounded-full' />
            <div className='absolute z-0 w-20 h-20 md:w-24 md:h-24 left-48 md:left-96 lg:left-80 top-0 bg-main-color clip-path-1' />
          </main>
          <div className='w-full lg:w-1/2 lg:relative lg:-top-20'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={images[imageIndex]}
              src={images[imageIndex]}
              alt='vaccinationSchedule1'
              className='w-full'
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default VaccinationSchedule;
