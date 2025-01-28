import consultationImg1 from '/Images/consultation1.png';
import consultationImg2 from '/Images/consultation2.png';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const images = [consultationImg1, consultationImg2];

const ConsultationsSection = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <article className='flex lg:items-stretch items-center flex-col-reverse md:flex-row justify-between gap-8 border-b border-slate-200 pb-20'>
        <main className='text-text-color flex flex-col justify-evenly gap-8 text-center md:text-start w-full relative mt-20 lg:mt-0'>
          <h1 className='font-bold text-xl sm:text-3xl lg:text-4xl leading-snug z-10'>
            Meet our exceptional team of <br />
            pediatric specialists dedicated <br /> to providing the best care
            for <br />
            you
          </h1>
          <p>Find the health solutions you need with ease and confidence.</p>
          <div className='absolute z-0 w-16 h-16 md:w-24 md:h-24 left-6 sm:left-16 md:left-0 lg:-left-5 top-5 lg:top-16 bg-main-color rounded-full' />
          <div className='absolute z-0 w-16 h-16 md:w-24 md:h-24 left-56 sm:left-96 md:left-72 lg:left-80 top-0 lg:top-12 bg-main-color clip-path-1' />
        </main>
        <div className='w-full lg:basis-5/6 relative top-10 z-40 before:absolute before:top-0 before:w-full before:h-full before:z-0 before:bg-button-color before:rounded-t-full'>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={images[imageIndex]}
            src={images[imageIndex]}
            // src={consultationImg1}
            alt='consultationImg'
            className='w-full relative z-10'
          />
        </div>
      </article>
    </>
  );
};

export default ConsultationsSection;
