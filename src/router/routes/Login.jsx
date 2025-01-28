import CardSlider from '../../Layouts/Login/CardSlider';
import LoginPage from '../../Layouts/Login/LoginPage';
import { useState } from 'react';
import { motion } from 'motion/react';
import RegisterPage from '../../Layouts/Login/RegisterPage';
import MobileLoginPage from '../../Layouts/Login/mobile/MobileLoginPage';
import MobileCardSlider from '../../Layouts/Login/mobile/mobileCardSlider';
import MobileRegisterPage from '../../Layouts/Login/mobile/MobileRegisterPage';

const Login = () => {
  const [slide, setSlide] = useState(true);

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <>
      <section
        className={`hidden section relative lg:flex justify-between my-10 h-screen flex-row`}
      >
        <CardSlider slide={slide} toggleSlide={toggleSlide} />
        <LoginPage />
        <RegisterPage slide={slide} />
      </section>
      <section className='w-full h-[1500px] section relative lg:hidden flex flex-col justify-between items-center my-10'>
        <MobileCardSlider slide={slide} toggleSlide={toggleSlide} />
        <MobileLoginPage />
        <MobileRegisterPage slide={slide} />
      </section>
    </>
  );
};

export default Login;
