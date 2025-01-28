import questionImg from '/Images/question.png';

const FaqPage = () => {
  return (
    <>
      <h1 className='headings'>
        Frequently <span>Asked Questions</span>
      </h1>
      <article className='flex items-center justify-between flex-col-reverse md:flex-row gap-10 pb-20 border-b border-slate-200'>
        <main className=' px-10 py-16 border border-slate-200 rounded-md w-full lg:w-2/3'>
          <h1 className='text-2xl md:text-4xl leading-snug font-bold text-text-color'>
            Quick answers to your Most <br />
            common questions to ensure <br /> a smooth experience.
          </h1>
        </main>
        <img src={questionImg} alt='questionImg' className='w-full md:w-1/3' />
      </article>
    </>
  );
};

export default FaqPage;
