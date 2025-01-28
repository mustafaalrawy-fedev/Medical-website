import { Link } from 'react-router';
import { motion } from 'motion/react';
import Logo from '../../../Components/Logo/Logo';
import facebookIcon from '/Images/Icons/Footer/facebook.svg';
import instagramIcon from '/Images/Icons/Footer/instagram.svg';
import tiktokIcon from '/Images/Icons/Footer/tiktok.svg';

const socialMediaInfo = [
  { title: 'facebook', icon: facebookIcon, href: 'https://www.facebook.com' },
  {
    title: 'instagram',
    icon: instagramIcon,
    href: 'https://www.instagram.com',
  },
  { title: 'tiktok', icon: tiktokIcon, href: 'https://www.tiktok.com' },
];

const footer = 'w-48';

const SocialMedia = () => {
  return (
    <>
      <section className='text-text-color lg:col-span-2 flex flex-col gap-10 items-center'>
        <h1 className='uppercase font-bold'>follow medical on social media</h1>
        <ul className='flex gap-5'>
          {socialMediaInfo.map((media) => {
            const { title, icon, href } = media;
            return (
              <motion.li whileHover={{ scale: 1.1, y: -3 }} key={title}>
                <Link to={href}>
                  <img src={icon} alt={title} title={title} />
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <Logo footer={footer} />
      </section>
    </>
  );
};

export default SocialMedia;
