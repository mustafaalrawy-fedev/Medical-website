import doctor1Img from '/Images/doctor1.png';
import doctor2Img from '/Images/doctor2.png';
import doctor3Img from '/Images/doctor3.png';
import { motion } from 'motion/react';
import arrowIcon from '/Images/Icons/consultations/arrow.svg';

const doctorsDetails = [
  {
    id: 1,
    image: doctor1Img,
    name: 'Dr. Mariem Omar',
    position:
      'Consultant pediatrician and nutritionist 10 years of experience in children’s health care',
  },
  {
    id: 2,
    image: doctor2Img,
    name: 'Dr. Ahmed Mahmoud',
    position:
      'Consultant pediatrician and nutritionist 10 years of experience in children’s health care',
  },
  {
    id: 3,
    image: doctor3Img,
    name: 'Dr. Amr Mohamed',
    position:
      'Consultant pediatrician and nutritionist 10 years of experience in children’s health care',
  },
  {
    id: 4,
    image: doctor1Img,
    name: 'Dr. Mariem Omar',
    position:
      'Consultant pediatrician and nutritionist 10 years of experience in children’s health care',
  },
  {
    id: 5,
    image: doctor2Img,
    name: 'Dr. Ahmed Mahmoud',
    position:
      'Consultant pediatrician and nutritionist 10 years of experience in children’s health care',
  },
  {
    id: 6,
    image: doctor3Img,
    name: 'Dr. Amr Mohamed',
    position:
      'Consultant pediatrician and nutritionist 10 years of experience in children’s health care',
  },
];

const DoctorsInfo = () => {
  return (
    <>
      <article className='relative'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full '>
          {doctorsDetails.map((detail) => {
            const { id, image, name, position } = detail;
            return (
              <motion.div
                whileHover={{ y: -10 }}
                key={id || name}
                className='shadow-lg rounded-xl '
              >
                <img src={image} alt={name} className='w-full' />
                <main className='p-5 flex flex-col gap-5'>
                  <h3 className='text-2xl'>{name}</h3>
                  <p>{position}</p>
                  <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.8 }}
                    className='btn'
                  >
                    Consult Now
                  </motion.button>
                </main>
              </motion.div>
            );
          })}
        </div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src={arrowIcon}
          alt='arrowIcon'
          className='absolute right-[-70px] top-1/2 cursor-pointer hidden lg:block'
        />
      </article>
      {/* Pagination */}
    </>
  );
};

export default DoctorsInfo;
