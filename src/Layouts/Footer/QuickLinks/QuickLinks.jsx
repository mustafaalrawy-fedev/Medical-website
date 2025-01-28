import { Link } from 'react-router';
import arrowIcon from '/Images/Icons/Footer/arrow.svg';

const navLinks = [
  { label: 'Doctors Team', href: '/doctors-team' },
  { label: 'Vaccinations', href: '/vaccinations' },
  { label: 'Consultations', href: '/consultations' },
  { label: 'Health Units', href: '/health-units' },
  { label: 'FAQ', href: '/faq' },
];

const QuickLinks = () => {
  return (
    <>
      <article className='flex flex-col gap-10 text-text-color'>
        <h1 className='font-bold'>QUICK LINKS</h1>
        <ul className='flex flex-col gap-5'>
          {navLinks.map((link) => {
            const { label, href } = link;
            return (
              <li key={label}>
                <Link to={href} className='flex items-center gap-1'>
                  <img src={arrowIcon} alt='arrow' />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
};

export default QuickLinks;
