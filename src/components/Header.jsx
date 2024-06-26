import React from 'react';

const Header = () => {
  return (
    <div className="md:p-20 p-10 bg-gradient-to-b from-gray-300 to-white md:pt-32 pt-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">Executive PG Programme in Data Science</h1>
          <p className="text-xl mb-4">Get up to 66% Hike in salary on course completion.</p>
          <p className="text-xl mb-4">EMI starting at ₹7,190/-</p>
          <p className="text-xl mb-4">Duration of the program: 12 Months</p>
          <p className="text-xl mb-4">Eligibility: Bachelor's Degree with a minimum of 50% or equivalent passing marks. No Coding Experience</p>
          <p className="text-xl font-bold mb-4">Batch Start Date: June 30, 2024</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4">Free Masterclass</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md">Apply Now</button>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <img src="img.png" alt="Data Science Program"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
