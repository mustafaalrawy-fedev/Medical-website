import { Fragment } from 'react';

const tableItemsSchedules = [
  {
    age: 'Two Months',
    tableHeadings: [
      'Age',
      'Dose Number',
      'Type of vaccine',
      'Disease',
      'Dosage Amount',
      'Vaccination Method',
    ],
    tableRow: [
      [
        'First 24 Hours',
        'Birth',
        'Hepatitis B Vaccine For Infants',
        'Viral Hepatitis B',
        '0.5 Cm',
        'Intramuscular injection in the Outer part of the Right Thigh, Anterior Muscle',
      ],
      [
        'First Week',
        'Second Dose',
        'Polio Vaccine',
        'Polio',
        '2.0 ml',
        'Oral Drop',
      ],
      [
        'Second Week',
        'Third Dose',
        'BCG Vaccine',
        'Tuberculosis',
        '0.1 ml',
        'Intradermal Injection',
      ],
    ],
  },
  {
    age: '4 Months',
    tableHeadings: [
      'Age',
      'Dose Number',
      'Type of vaccine',
      'Disease',
      'Dosage Amount',
      'Vaccination Method',
    ],
    tableRow: [
      [
        'First Week',
        'First Dose',
        'DTP (Diphtheria, Tetanus, Pertussis) Vaccine',
        'Diphtheria, Tetanus, Pertussis',
        '0.5 ml',
        'Intramuscular injection in the Thigh',
      ],
      [
        'First Week',
        'Second Dose',
        'Polio Vaccine',
        'Polio',
        '2.0 ml',
        'Oral Drop',
      ],
      [
        'First Week',
        'Third Dose',
        'Hib Vaccine (Haemophilus Influenzae Type B)',
        'Haemophilus Influenzae B',
        '0.5 ml',
        'Intramuscular injection in the Thigh',
      ],
    ],
  },
  {
    age: '6 Months',
    tableHeadings: [
      'Age',
      'Dose Number',
      'Type of vaccine',
      'Disease',
      'Dosage Amount',
      'Vaccination Method',
    ],
    tableRow: [
      [
        'First Week',
        'First Dose',
        'Hepatitis B Vaccine',
        'Hepatitis B',
        '0.5 ml',
        'Intramuscular injection in the Outer Thigh',
      ],
      [
        'First Week',
        'Second Dose',
        'Polio Vaccine',
        'Polio',
        '2.0 ml',
        'Oral Drop',
      ],
      [
        'First Week',
        'Third Dose',
        'DTP (Diphtheria, Tetanus, Pertussis)',
        'Diphtheria, Tetanus, Pertussis',
        '0.5 ml',
        'Intramuscular injection in the Thigh',
      ],
      [
        'First Week',
        'Fourth Dose',
        'Hib Vaccine (Haemophilus Influenzae Type B)',
        'Haemophilus Influenzae B',
        '0.5 ml',
        'Intramuscular injection',
      ],
    ],
  },
];

const AgeTables = () => {
  return (
    <>
      <section className='py-12'>
        {tableItemsSchedules.map((tableItem) => {
          const { age, tableHeadings, tableRow } = tableItem;

          // Skip rendering if the table data is empty
          if (tableHeadings.length === 0 || tableRow.length === 0) return null;

          return (
            <Fragment key={age}>
              <h1 id={age} className='text-3xl my-10 text-text-color font-bold'>
                {age}
              </h1>
              <div className='overflow-x-auto'>
                <table className='min-w-full table-auto border-collapse border border-gray-200'>
                  <thead>
                    <tr className='bg-button-color text-white'>
                      {tableHeadings.map((heading, index) => (
                        <th
                          key={heading + index}
                          className='px-4 py-2 text-left border border-white'
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableRow.map((row, rowIndex) => (
                      <tr key={rowIndex} className='bg-main-color'>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className='px-4 py-2 border border-white'
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Fragment>
          );
        })}
      </section>
    </>
  );
};

export default AgeTables;
