import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import AgeTables from './AgeTables';

const sortTime = [
  { label: 'All' },
  { label: 'Two Months' },
  { label: '4 Months' },
  { label: '6 Months' },
];

const SortByAge = () => {
  const sortSchedule = useRef('All');
  const [sortType, setSortType] = useState(sortSchedule.current);

  const handleSort = (e) => {
    sortSchedule.current = e.target.innerHTML;
    setSortType(e.target.innerHTML);
    // console.log(sortSchedule.current);
  };

  return (
    <>
      <div className='flex items-center gap-5 flex-wrap lg:flex-nowrap'>
        <h2 className='text-text-color'>Sort by Age</h2>
        <div className='flex gap-4 flex-wrap lg:flex-nowrap'>
          {sortTime.map((time, i) => {
            return (
              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.5 }}
                className={`px-5 p-3 border-2 border-text-color rounded-3xl text-text-color font-semibold transition duration-100  ${
                  sortType === time.label &&
                  'bg-button-color border-transparent text-white'
                }`}
                key={i}
                href={`#${time.label}`}
                onClick={handleSort}
              >
                {time.label}
              </motion.a>
            );
          })}
        </div>
      </div>
      <AgeTables />
    </>
  );
};

export default SortByAge;
