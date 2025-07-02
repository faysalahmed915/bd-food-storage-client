import React from 'react';
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router';
const NoItem = () => {
    return (
        <div className="flex items-center justify-center py-40">
            <div className="bg-gray-50 shadow-xl rounded-2xl p-8 max-w-md w-full text-center space-y-6 mg-auto">
                <div className="flex justify-center text-blue-600 text-5xl">
                    <FaUsers />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                    No Item is in the Fridge Yet
                </h2>
                <p>
                    Looks like your fridge is empty... <br /> Start adding food items to keep track of what you have and avoid waste!
                </p>
                <Link to={'/AddFood'} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition duration-300 w-full">
                    Add Food
                </Link>
            </div>
        </div>
    );
};

export default NoItem;