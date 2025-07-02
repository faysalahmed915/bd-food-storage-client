import React from 'react';
import { BiSolidFridge } from 'react-icons/bi';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className="text-xl font-bold flex items-center gap-2 text-[#176AE5]">
            <BiSolidFridge className="text-[#176AE5] text-2xl" />
            BD Food Storage
        </Link>
    );
};

export default Logo;