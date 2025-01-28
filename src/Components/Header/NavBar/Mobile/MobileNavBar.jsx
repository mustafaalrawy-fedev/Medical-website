import { NavLink } from 'react-router';
import NavIcons from '../../NavIcons/NavIcons';
import { motion } from 'motion/react';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Vaccinations', href: '/vaccinations' },
  { label: 'Consultations', href: '/consultations' },
  { label: 'Health Units', href: '/health-units' },
  { label: 'FAQ', href: '/faq' },
  { label: 'LOGIN', href: '/login' },
];

const mobile = 'flex items-center justify-center';

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? 'white' : '#555',
      backgroundColor: isActive ? '#bae6fd' : '',
    };
  };

  return (
    <>
      <section className='lg:hidden block'>
        <div>
          {/* Menu Icon */}
          <motion.svg
            whileHover={{ x: 5 }}
            whileTap={{ x: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className='w-8 h-8 text-gray-800 dark:text-white cursor-pointer select-none outline-none'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeWidth='2'
              d='M5 7h14M5 12h14M5 17h10'
            />
          </motion.svg>
        </div>
        <motion.ul
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? '0%' : '100%' }}
          transition={{ duration: 0.5 }}
          className='fixed top-0 right-0 bg-white w-3/4 md:w-1/2 h-full z-[70] p-8 flex flex-col justify-center gap-7'
        >
          {/* Close Icon */}
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className='absolute top-7 right-7'
          >
            <motion.svg
              whileHover={{ x: 5 }}
              whileTap={{ x: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className={'cursor-pointer'}
              width='28'
              height='28'
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
            >
              <motion.path
                whileHover={{ fill: '#dc2626' }}
                d='m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm-2.8284271 11.7573593c-.3905243-.3905243-1.0236893-.3905243-1.4142136 0s-.3905243 1.0236893 0 1.4142136l2.8284271 2.8284271-2.8284271 2.8284271c-.3905243.3905243-.3905243 1.0236893 0 1.4142136s1.0236893.3905243 1.4142136 0l2.8284271-2.8284271 2.8284271 2.8284271c.3905243.3905243 1.0236893.3905243 1.4142136 0s.3905243-1.0236893 0-1.4142136l-2.8284271-2.8284271 2.8284271-2.8284271c.3905243-.3905243.3905243-1.0236893 0-1.4142136s-1.0236893-.3905243-1.4142136 0l-2.8284271 2.8284271z'
                fill='#202327'
              />
            </motion.svg>
          </motion.span>
          {navLinks.map((links) => {
            const { label, href } = links;
            return (
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                key={label}
                className='font-bold text-button-color text-md md:text-lg'
              >
                <NavLink
                  style={handleActiveLink}
                  onClick={handleActiveLink}
                  className={`w-full block p-2 rounded-lg transition-all duration-300 hover:bg-main-color `}
                  to={href}
                >
                  {label}
                </NavLink>
              </motion.li>
            );
          })}
          <NavIcons mobile={mobile} />
        </motion.ul>
        <div
          className={`fixed top-0 left-0 w-full h-full z-[60] bg-black opacity-45 ${
            isOpen ? 'block' : 'hidden'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
      </section>
    </>
  );
};

export default MobileNavBar;
