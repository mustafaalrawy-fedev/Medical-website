const schedule = [
  { day: 'SUN', from: '7 AM', to: '1 PM' },
  { day: 'MON', from: '9 AM', to: '1 PM' },
  { day: 'TUS', from: '8 AM', to: '1 PM' },
  { day: 'TUS', from: '9 AM', to: '1 PM' },
];

const Timing = () => {
  return (
    <>
      <section className='text-text-color flex flex-col gap-10'>
        <h1 className='font-bold'>Timing</h1>
        <ul className='flex flex-col gap-5'>
          {schedule.map((data, i) => {
            const { day, from, to } = data;
            return (
              <li key={i} className='flex gap-2'>
                <span>{day}: </span>
                <span>
                  {from}-{to}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Timing;
