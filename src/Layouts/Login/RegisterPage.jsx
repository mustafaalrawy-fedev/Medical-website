import googleIcon from '/Images/google-icon.png';
import { motion } from 'motion/react';

const RegisterPage = ({ slide }) => {
  return (
    <>
      <motion.section
        animate={slide ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
        className='flex flex-col gap-7 w-full sm:w-[60%] md:w-[48%] items-center justify-center absolute left-0 h-full'
      >
        <main className='flex flex-col gap-5 relative text-center'>
          <h1 className='text-4xl font-bold text-text-color'>
            Create Account As A User
          </h1>
          <p className='text-zinc-400'>Login Using Social Networks</p>
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='flex justify-center items-center'
          >
            <img className='w-12' src={googleIcon} alt='googleIcon' />
          </motion.button>
          <div className='relative text-zinc-400 text-center after:w-1/2 after:absolute after:bg-zinc-400 after:h-[1px] after:top-1/2 after:-right-5  before:w-1/2 before:absolute before:bg-zinc-400 before:h-[1px] before:top-1/2 before:-left-5 '>
            OR
          </div>
        </main>
        <form className='flex flex-col gap-5 h-1/2 overflow-y-scroll pr-3'>
          <div className='flex gap-3 justify-between'>
            <input type='text' placeholder='First Name' className='inp' />
            <input type='text' placeholder='Second Name' className='inp' />
          </div>
          <input type='number' placeholder='National Number' className='inp' />
          <input type='text' placeholder='Address' className='inp' />
          <input type='number' placeholder='Phone Number' className='inp' />
          <input type='date' placeholder='Birth Date' className='inp' />
          <input type='email' placeholder='Email' className='inp' />
          <input type='password' placeholder='Password' className='inp' />
          <input type='password' placeholder='Password' className='inp' />
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='btn'
          >
            Sign Up
          </motion.button>
        </form>
      </motion.section>
    </>
  );
};

export default RegisterPage;
