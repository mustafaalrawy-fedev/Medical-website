import mailIcon from '/Images/Icons/Footer/mail-icon.svg';
import telephoneIcon from '/Images/Icons/Footer/telephone.svg';

const info = [
  { icon: mailIcon, title: 'Support@mybaby.com' },
  { icon: telephoneIcon, title: '022125984' },
];

const AboutMyBaby = () => {
  return (
    <>
      <section className='lg:col-span-2'>
        <article className='flex flex-col gap-8 text-text-color'>
          <h1 className='uppercase  font-bold'>About Medical</h1>
          <p>
            Our platform provides expert guidance on your health and care, with
            tips, vaccination schedules, and consultations to support healthy
            growth.
          </p>
          {info.map((data) => {
            const { icon, title } = data;
            return (
              <span key={title} className='flex items-center gap-2'>
                <img key={icon} src={icon} alt='icon' />
                {title}
              </span>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default AboutMyBaby;
