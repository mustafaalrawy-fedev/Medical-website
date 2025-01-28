import { useNavigate } from 'react-router';
import logoImg from '/Images/medical-logo.png';

const Logo = ({ footer }) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        src={logoImg}
        alt='Logo'
        className={`w-28 cursor-pointer ${footer}`}
        onClick={() => navigate('/')}
      />
    </>
  );
};

export default Logo;
