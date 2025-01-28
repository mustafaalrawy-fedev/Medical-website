import feedingIcon from '/Images/Icons/OurServantsIcons/feedingIcon.svg';
import healthcareIcon from '/Images/Icons/OurServantsIcons/healthcare.svg';
import injectionIcon from '/Images/Icons/OurServantsIcons/injection.svg';
import stethoscopeIcon from '/Images/Icons/OurServantsIcons/stethoscope-light.svg';
import { motion } from 'motion/react';
import ourServantImg1 from '/Images/ourServant1.png';
import ourServantImg2 from '/Images/ourServant2.png';
import ourServantImg3 from '/Images/ourServant3.png';
import { useEffect, useState } from 'react';

const items = [
  {
    id: 1,
    icon: feedingIcon,
    highlights: 'Feeding guidelines',
    description: 'A section with detailed nutrition tips and healthy recipes.',
  },
  {
    id: 2,
    icon: healthcareIcon,
    highlights: 'Daily health care tips',
    description:
      ' Articles on hygiene, dental care, and handling minor injuries.',
  },
  {
    id: 3,
    icon: injectionIcon,
    highlights: 'Vaccination schedule',
    description:
      'A complete vaccination timeline with reminders for upcoming appointments',
  },
  {
    id: 4,
    icon: stethoscopeIcon,
    highlights: 'Consultations with doctors',
    description: 'Allows You to communicate with specialists',
  },
];

const OurServants = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [ourServantImg1, ourServantImg2, ourServantImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className='section'>
        <h1 className='headings '>
          Our <span>Servants</span>
        </h1>
        <article className='grid gap-5 grid-cols-auto-fill pb-10'>
          {items.map((item) => {
            const { id, icon, highlights, description } = item;
            return (
              <motion.div
                whileHover={{ y: -10 }}
                key={id}
                className='border-text-color border p-5 rounded-xl'
              >
                <div className='bg-main-color w-fit p-7 rounded-full'>
                  <img src={icon} alt={highlights} />
                </div>
                <h1 className='text-xl font-bold my-5'>{highlights}</h1>
                <p>{description}</p>
              </motion.div>
            );
          })}
        </article>
        <section className='flex flex-wrap lg:flex-nowrap items-center justify-between gap-5'>
          <div className='lg:basis-1/3 h-full'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={images[imageIndex]}
              src={images[imageIndex]}
              alt='ourServantImg'
              className='w-full h-full'
            />
          </div>
          <article className='border border-slate-200 p-5 lg:p-16 rounded-xl lg:basis-2/3'>
            <h1 className='text-xl lg:text-4xl text-text-color font-bold mb-7 leading-snug'>
              Are you looking for an exceptional pediatrician ?
            </h1>
            <p className='text-text-color font-bold mb-7 leading-snug'>
              At Medical, we offer a team of highly skilled and experienced
              pediatricians dedicated to care. Rely on us for trusted medical
              consultations and comprehensive health advice
            </p>
          </article>
        </section>
      </section>
    </>
  );
};

export default OurServants;
