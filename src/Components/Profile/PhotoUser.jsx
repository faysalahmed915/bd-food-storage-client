import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const PhotoUser = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="relative group">
            <img
                src={user?.photoURL}
                alt={user?.email}
                className="w-12 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="absolute bottom-0 top-8 -left-20 right-0 bg-opacity-70 text-accent-content text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user?.email}
            </div>
        </div>
    );
};

export default PhotoUser;