import healthUnitImg1 from '/Images/healthUnit1.jpg';
import healthUnitImg2 from '/Images/healthUnit2.jpg';
import heliopolisBranchImg from '/Images/HeliopolisBranch.png';
import downtownBranchImg from '/Images/downtown.png';
import SettlementBranchImg from '/Images/5thSettlement.png';
import locationIcon from '/Images/Icons/ourClinic/location.svg';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const clinicItems = [
  {
    id: 1,
    image: heliopolisBranchImg,
    location: 'Heliopolis Branch',
    locationDescription: '45 Al-Hegaz Street, Heliopolis, Cairo, Egypt',
  },
  {
    id: 2,
    image: SettlementBranchImg,
    location: 'The 5th Settlement',
    locationDescription: '12 Kasr El Nile Street, Downtown, Cairo, Egypt',
  },
  {
    id: 3,
    image: downtownBranchImg,
    location: 'Downtown Branch',
    locationDescription: '20 Teseen Street, Fifth Settlement, New Cairo, Egypt',
  },
];

const healthUnitImage = [healthUnitImg1, healthUnitImg2];

const HealthUnits = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % healthUnitImage.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className='section'>
        <h1 className='headings'>
          Health
          <span> Units</span>
        </h1>
        <article className='flex items-center flex-col-reverse md:flex-row justify-between gap-10 pb-20 border-b border-slate-200'>
          <main className='relative border border-slate-100 py-10 px-5 rounded-xl text-text-color md:w-2/3 w-full text-center md:text-start'>
            <h1 className='text-xl md:text-4xl font-bold mb-8 relative z-10'>
              You can visit us at our health <br />
              units to receive the best <br />
              medical care for you
            </h1>
            <p className='text-md'>
              Our team of specialized doctors is ready to support you and <br />
              answer all your questions to ensure your health and <br />
              safety.
            </p>
            <div className='absolute z-0 w-16 h-16 md:w-24 md:h-24 left-2 md:left-32 lg:-left-5 top-14 bg-main-color rounded-full' />
            <div className='absolute z-0 w-16 h-16 md:w-24 md:h-24 left-48 md:left-96 lg:left-80 top-10 bg-main-color clip-path-1' />
          </main>
          <div className='w-full md:w-1/3 relative'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={healthUnitImage[imageIndex]}
              src={healthUnitImage[imageIndex]}
              // src={healthUnitImg2}
              alt='healthUnits'
              className='w-full rounded-xl relative z-20'
            />
            <div className='absolute -top-8 -left-8 z-0 w-20 h-20 rounded-full bg-main-color'></div>
            <div className='absolute -bottom-8 -right-8 z-0 w-20 h-20 rounded-full bg-main-color'></div>
          </div>
        </article>
        {/* Our Clinic */}
        <article>
          <h1 className='headings'>
            Our
            <span> Clinic</span>
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {clinicItems.map((detail) => {
              const { id, image, location, locationDescription } = detail;
              return (
                <motion.main
                  whileHover={{ y: -10 }}
                  key={id}
                  className='shadow-lg rounded-xl'
                >
                  <img src={image} alt={location} className='w-full' />
                  <div className='p-7'>
                    <h1 className='text-text-color font-bold text-xl mb-5'>
                      {location}
                    </h1>
                    <div className='flex justify-between gap-3'>
                      <img src={locationIcon} alt='locationIcon' />
                      <span className='text-slate-600'>
                        {locationDescription}
                      </span>
                    </div>
                  </div>
                </motion.main>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default HealthUnits;
