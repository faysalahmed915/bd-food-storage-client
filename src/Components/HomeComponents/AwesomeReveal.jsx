import React from 'react';
import { Fade } from "react-awesome-reveal";

const AwesomeReveal = () => {
  return (
    <div className="py-2 md:py-6 lg:py-8 bg-base-100 flex items-center justify-center">
      <div className=" w-full rounded-3xl shadow-2xl p-8 md:p-12 bg-base-200">
        <Fade>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
            Welcome to
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
            BD Food Storage
          </h1>
          <p className="text-lg md:text-xl text-center mb-8 leading-relaxed">
            
          </p>
        </Fade>

        <Fade cascade damping={1}>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-300 pb-2 text-center">
            Why BD Food Storage?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">
              Track food items with expiry dates to reduce waste
            </li>
            <li className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">
              Get reminders for expiring items to use them in time
            </li>
            <li className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">
              Organize your fridge efficiently with categories
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default AwesomeReveal;