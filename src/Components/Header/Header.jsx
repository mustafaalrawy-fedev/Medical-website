import NavBar from './NavBar/NavBar';
import Logo from '../Logo/Logo';
import MobileNavBar from './NavBar/Mobile/MobileNavBar';

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between bg-main-color h-20 w-full px-5 lg:px-24 relative'>
        <Logo />
        <NavBar />
        <MobileNavBar />
      </header>
    </>
  );
};

export default Header;
