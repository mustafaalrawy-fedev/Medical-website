import { useState } from 'react';
import arrowIcon from '/Images/Icons/faq/arrow-down.svg';
import { motion, AnimatePresence } from 'framer-motion';

const questionAboutWebsite = [
  {
    question: 'How Can I Log in ?',
    answer:
      'Click On The "Log In" Button On HomePage. Enter Your Email And Password. Click "Log In" To Complete The Process.',
  },
  {
    question: 'How can I consult a doctor ?',
    answer:
      'Select A Doctor From The Last On The Consultation Page, Click On The "Consult Now" Button, Then Enter Your Question Or Request And Wait For Doctor’s Response.',
  },
];

const healthCareServices = [
  {
    question: 'How Can I Keep My Child Healthy ?',
    answer:
      'Ensure proper nutrition, personal hygiene, timely vaccinations, and regular check-ups with the doctor to monitor your health.',
  },
  {
    question: 'When should I book an appointment with a pediatrician ?',
    answer:
      'You should book an appointment if you notice unusual symptoms such as a persistent high fever, strange rashes, or changes in your activity. Additionally, regular check-ups are recommended to ensure your health.',
  },
  {
    question: 'How can I deal with a fever in children ?',
    answer:
      'You can use cold compresses, ensure you stays hydrated, and dress them in lightweight clothing. If the fever persists for more than two days or rises above 39°C, consult a doctor immediately.',
  },
  {
    question: 'What are the essential vaccinations for my child ?',
    answer:
      'The essential vaccinations include those against measles, polio, diphtheria, whooping cough, and hepatitis. Refer to the recommended vaccination schedule from the Ministry of Health or your pediatrician.',
  },
];

const FaqQuestions = () => {
  // State to track which question is toggled (by index)
  const [activeWebsiteQuestion, setActiveWebsiteQuestion] = useState(null);
  const [activeHealthcareQuestion, setActiveHealthcareQuestion] =
    useState(null);

  const handleQuestion = (index, section) => {
    if (section === 'website') {
      setActiveWebsiteQuestion(activeWebsiteQuestion === index ? null : index);
    } else if (section === 'healthcare') {
      setActiveHealthcareQuestion(
        activeHealthcareQuestion === index ? null : index
      );
    }
  };

  return (
    <>
      <h1 className='text-3xl font-bold text-text-color my-10'>
        Questions About The Website
      </h1>
      <article>
        {questionAboutWebsite.map((info, index) => {
          const { question, answer } = info;
          return (
            <main
              key={index}
              className='bg-main-color p-3 w-full lg:w-3/4 rounded-3xl h-fit mb-7'
            >
              <div className='flex items-center gap-3 justify-between'>
                <h5 className='font-bold text-text-color'>{question}</h5>
                <div
                  className='bg-button-color p-2 rounded-full cursor-pointer'
                  onClick={() => handleQuestion(index, 'website')}
                >
                  <motion.img
                    src={arrowIcon}
                    alt='arrowIcon'
                    className={`transition duration-300 ${
                      activeWebsiteQuestion === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence initial={false}>
                {activeWebsiteQuestion === index && (
                  <motion.p
                    initial={{ y: -3, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -3, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='w-11/12 text-subTitle-color'
                  >
                    {answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </main>
          );
        })}
      </article>
      <h1 className='text-3xl font-bold text-text-color my-10'>
        Healthcare Services
      </h1>
      <article>
        {healthCareServices.map((info, index) => {
          const { question, answer } = info;
          return (
            <main
              key={index}
              className='bg-main-color p-3 w-full lg:w-3/4 rounded-3xl h-fit mb-7'
            >
              <div className='flex items-center gap-3 justify-between'>
                <h5 className='font-bold text-text-color'>{question}</h5>
                <div
                  className='bg-button-color p-2 rounded-full cursor-pointer'
                  onClick={() => handleQuestion(index, 'healthcare')}
                >
                  <motion.img
                    src={arrowIcon}
                    alt='arrowIcon'
                    className={`transition duration-300 ${
                      activeHealthcareQuestion === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence initial={false}>
                {activeHealthcareQuestion === index && (
                  <motion.p
                    initial={{ y: -3, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -3, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='w-11/12 text-subTitle-color'
                  >
                    {answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </main>
          );
        })}
      </article>
    </>
  );
};

export default FaqQuestions;
