import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-blue-600 py-20 text-white text-center">
      <h2 className="text-3xl font-extrabold">Ready to Make a Difference?</h2>
      <p className="text-xl mt-4">Join us today and become a part of a community that helps during emergencies. Whether you're reporting a disaster or offering help, your participation matters!</p>

      <div className="mt-8">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:text-blue-700 transition-all duration-300 text-lg font-semibold">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default CTASection;
