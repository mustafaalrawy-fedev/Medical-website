import { motion } from 'motion/react';

const MobileCardSlider = ({ slide, toggleSlide }) => {
  return (
    <>
      <motion.div
        animate={{ y: slide ? 0 : '100%' }}
        className={`w-1/2 p-10 ${
          slide ? 'bg-button-color  text-white' : 'bg-slate-100 text-black'
        }  text-center rounded-2xl relative z-50 w-full h-1/2`}
      >
        <div className='w-full absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center h-full gap-10 z-20'>
          <h1 className='font-bold text-5xl'>
            {slide ? 'New Here ?' : 'Welcome Back!'}
          </h1>
          <p className='font-bold'>
            {slide ? (
              <>
                Sign Up And Discover A Great <br /> Amount Of New Opportunities!
              </>
            ) : (
              <>
                To Keep Connected With Us Please
                <br />
                Login With Your Personal Info
              </>
            )}
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`w-1/2 p-3 ${
              slide ? 'bg-white text-text-color' : 'bg-text-color text-white'
            } font-bold rounded-full`}
            onClick={toggleSlide}
          >
            {slide ? 'Sign Up' : 'Login'}
          </motion.button>
        </div>
        {/* Triangle */}
        <div
          className={`absolute  ${
            slide ? 'bg-main-color opacity-30 ' : 'bg-teal-100'
          }   w-40 h-40 top-10 left-6 z-0`}
          style={{ clipPath: 'polygon(55% 0, 0 100%, 100% 61%)' }}
        ></div>
        {/* big circle */}
        <div
          className={`absolute ${
            slide ? 'bg-main-color opacity-30' : 'bg-teal-100'
          } w-60 h-60 top-1/2 left-1/2 -translate-x-1/4 rounded-full z-0`}
        ></div>
        {/* small circle */}
        <div
          className={`absolute ${
            slide ? 'bg-main-color opacity-30 ' : 'bg-teal-100'
          } w-24 h-24 bottom-7 right-2 -translate-x-1/4 rounded-full z-0`}
        ></div>
      </motion.div>
    </>
  );
};

export default MobileCardSlider;
