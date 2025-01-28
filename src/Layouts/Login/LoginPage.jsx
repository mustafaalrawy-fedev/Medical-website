import doctorLoginIcon from '/Images/Icons/Login/doctor-login.svg';
import userLoginIcon from '/Images/Icons/Login/user-login.svg';
import { Fragment, useState } from 'react';
import googleIcon from '/Images/google-icon.png';
import { motion } from 'motion/react';

const LoginPage = () => {
  const [loginAsDoctor, setLoginAsDoctor] = useState(false);

  return (
    <>
      <section className='flex flex-col gap-7 w-[48%] items-center justify-center'>
        <main className='flex flex-col gap-5 relative text-center'>
          <h1 className='text-4xl font-bold text-text-color'>
            {loginAsDoctor ? 'Login As A Doctor' : 'Login As A User'}
          </h1>
          <p className='text-zinc-400'>
            {loginAsDoctor || 'Login Using Social Networks'}
          </p>
          {/* Logo */}
          {loginAsDoctor || (
            <Fragment>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='flex justify-center items-center'
              >
                <img className='w-12' src={googleIcon} alt='googleIcon' />
              </motion.button>
              <div className='relative text-zinc-400 text-center after:w-3/4 after:absolute after:bg-zinc-400 after:h-[1px] after:top-1/2 after:-right-20  before:w-3/4 before:absolute before:bg-zinc-400 before:h-[1px] before:top-1/2 before:-left-20 '>
                OR
              </div>
            </Fragment>
          )}
        </main>
        <form className='w-3/4 flex flex-col gap-5'>
          <div className='w-full'>
            <input className='inp' type='text' placeholder='Email' />
            <img src='' alt='' />
          </div>
          <div>
            <input className='inp' type='password' placeholder='Password' />
            <img src='' alt='' />
          </div>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            type='submit'
            className='btn'
          >
            Login
          </motion.button>
        </form>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className='flex items-center gap-3'
        >
          <img
            src={loginAsDoctor ? userLoginIcon : doctorLoginIcon}
            alt='DoctorLoginIcon'
          />
          <span
            className='text-text-color font-bold'
            onClick={() => setLoginAsDoctor(!loginAsDoctor)}
          >
            {loginAsDoctor ? 'Login As A User' : 'Sign As A Doctor'}
          </span>
        </motion.button>
      </section>
    </>
  );
};

export default LoginPage;
