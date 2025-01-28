import { NavLink } from 'react-router';
import NavIcons from '../NavIcons/NavIcons';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Vaccinations', href: '/vaccinations' },
  { label: 'Consultations', href: '/consultations' },
  { label: 'Health Units', href: '/health-units' },
  { label: 'FAQ', href: '/faq' },
  { label: 'LOGIN', href: '/login' },
];

const NavBar = () => {
  return (
    <>
      <ul className='lg:flex items-center gap-2 hidden'>
        {navLinks.map((link) => {
          const { label, href } = link;
          return (
            <li key={label}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `font-bold  px-5 p-2 rounded-full hover:bg-button-color hover:text-white transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-button-color'
                      : 'text-button-color'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          );
        })}
        <NavIcons />
      </ul>
    </>
  );
};

export default NavBar;
