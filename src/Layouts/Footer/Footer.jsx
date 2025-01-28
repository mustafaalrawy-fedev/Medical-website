import React from 'react';
import AboutMyBaby from './AboutMyBaby/AboutMyBaby';
import QuickLinks from './QuickLinks/QuickLinks';
import Timing from './Timing/Timing';
import SocialMedia from './SocialMedia/SocialMedia';

const Footer = () => {
  return (
    <>
      <footer className='grid grid-cols-auto-fill lg:grid-cols-6 gap-12 px-5 lg:px-24 w-full bg-main-color p-20 justify-between'>
        <AboutMyBaby />
        <QuickLinks />
        <Timing />
        <SocialMedia />
      </footer>
    </>
  );
};

export default Footer;
