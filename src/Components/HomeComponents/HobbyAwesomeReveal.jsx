import React from 'react';
import { Fade } from "react-awesome-reveal";

const HobbyAwesomeReveal = () => {
  return (
    <div className="py-2 md:py-6 lg:py-8 bg-base-200 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-gray-800">
        <Fade>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent">
            Welcome to HobbyHub!
          </h1>
          <p className="text-lg md:text-xl text-center mb-8 leading-relaxed">
            Discover and join local hobby groups, or create your own community around your passions.
          </p>
        </Fade>

        <Fade cascade damping={1}>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-purple-300 pb-2 text-center">
            Why HobbyHub?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">
              Connect with people who share your interests
            </li>
            <li className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">
              Easily create and manage your own hobby groups
            </li>
            <li className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">
              Responsive design with smooth animations for all devices
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default HobbyAwesomeReveal;