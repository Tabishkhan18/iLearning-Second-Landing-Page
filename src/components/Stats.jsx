import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div className="py-10 text-center bg-white">
      <h1 className='text-4xl py-10 font-bold '>Placement stats</h1>
      <div className="container py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="stat">
            <CountUp start={0} end={57} duration={2} className="text-3xl font-bold" />
            <p className="text-xl mt-2 text-neutral-500">Avg Salary Hike</p>
          </div>
          <div className="stat">
            <CountUp start={0} end={1.23} duration={2} decimals={2} suffix=" Cr" className="text-3xl font-bold" />
            <p className="text-xl mt-2 text-neutral-500">Highest Salary</p>
          </div>
          <div className="stat">
            <CountUp start={0} end={3500} duration={2} className="text-3xl font-bold" />
            <p className="text-xl mt-2 text-neutral-500">Career Transitions</p>
          </div>
          <div className="stat">
            <CountUp start={0} end={450} duration={2} className="text-3xl font-bold" />
            <p className="text-xl mt-2 text-neutral-500">Hiring partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
