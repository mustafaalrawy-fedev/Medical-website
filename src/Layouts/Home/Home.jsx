import { useNavigate } from 'react-router';
import heroImg from '/Images/heroImg.png';
import { motion } from 'motion/react';
// shape patterns
import shapePattern2 from '/Images/shapes-pattern2.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex gap-5 items-center justify-between relative'>
        <div className='h-[calc(100vh-80px)]  w-full px-5 lg:px-24 flex flex-col justify-center'>
          <article className='lg:w-1/2 text-center lg:text-start'>
            <main className='relative w-full'>
              <h1 className='text-text-color font-bold text-2xl sm:text-4xl leading-snug relative z-20 '>
                Providing trusted guidance <br />
                to help you to care for your <br />
                Health with care and <br />
                attention
              </h1>
              <div className='absolute z-0 w-20 h-20 md:w-24 md:h-24 left-2 md:left-32 lg:-left-5 top-5 bg-main-color rounded-full' />
              <div className='absolute z-0 w-20 h-20 md:w-24 md:h-24 left-48 md:left-96 lg:left-80 top-0 bg-main-color clip-path-1' />
            </main>
            <p className='my-10 lg:my-20 font-bold text-subTitle-color'>
              Your Health is Our Mission
            </p>
            <motion.button
              onClick={() => navigate('consultations')}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.8 }}
              className='text-white bg-button-color px-5 py-2 rounded-full'
            >
              Get A Consultation
            </motion.button>
          </article>
        </div>
        <div className='absolute z-20 h-screen right-8 -top-8 w-auto hidden lg:block'>
          <div className='relative w-[500px] h-[500px]'>
            <img
              src={heroImg}
              alt='heroImg'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        {/* circle Shape */}
        <div className='absolute z-0 w-[550px] h-[550px] bg-button-color rounded-full right-3 top-10  hidden lg:block' />
        {/* shapes Patterns */}
        <div className='absolute z-10 right-0 w-[550px] h-[550px] top-0 hidden lg:block'>
          <img
            src={shapePattern2}
            alt='shapePattern2'
            className='w-full h-full object-cover'
          />
        </div>
        {/* shapes */}
        {/* <div className='absolute z-0 w-24 h-24 left-20 top-40 bg-button-color rounded-full mix-blend-color-burn' />
        <div className='absolute z-0 w-24 h-24 left-96 top-24 bg-button-color  mix-blend-color-burn clip-path-1' /> */}
        {/* <div className='absolute z-0 w-8 h-8 lg:w-20 lg:h-20 left-0 -top-4 lg:top-20 bg-button-color clip-path-3' /> */}
        {/* <div className='absolute z-0 w-8 h-8 lg:w-20 lg:h-20 left-0 -top-12 lg:top-0 bg-button-color' /> */}
      </div>
    </>
  );
};

export default Home;
