import React from 'react';
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router';
const NoGroup = () => {
    return (
        <div className="flex items-center justify-center py-40  px-4">
            <div className="bg-gray-50 shadow-xl rounded-2xl p-8 max-w-md w-full text-center space-y-6">
                <div className="flex justify-center text-blue-600 text-5xl">
                    <FaUsers />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                    No Groups Yet
                </h2>
                <p className="text-gray-600">
                    It looks a little quiet here... <br /> Start your first group to meet new people, share ideas, and enjoy your hobby together!
                </p>
                <Link to={'/createGroup'} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition duration-300 w-full">
                    Create Group
                </Link>
            </div>
        </div>
    );
};

export default NoGroup;