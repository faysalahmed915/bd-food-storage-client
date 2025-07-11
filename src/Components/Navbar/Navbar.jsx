import React, { use } from 'react';
import { BiSolidFridge } from 'react-icons/bi';
import { Link, NavLink, useNavigate } from 'react-router';
import PhotoUser from '../Profile/PhotoUser';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import ThemeToggle from '../Theme/ThemeToggle';
import Logo from '../Shared/Logo';

const Navbar = () => {
    const { user, logOut, loading } = use(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return <div>loading</div>
    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("User logged out successfully");
                navigate("/");
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const links = (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-secondary-content"}>Home</NavLink>

            {user && <NavLink to="/MyItems" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-secondary-content"}>My Items</NavLink>}

            <NavLink to="/fridge" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-secondary-content"}>Fridge</NavLink>


            {user && <NavLink to="/AddFood" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-secondary-content"}>Add Food</NavLink>}

            <NavLink to="/contactUs" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-secondary-content"}>Contact Us</NavLink>
        </>
    )

    return (
        <div className="bg-secondary shadow-md px-2 md:px-4 lg:px-8 py-2 sticky top-0 z-50 text-secondary-content">
        <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-gray-600 lg:hidden hover:bg-gray-100 pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-white rounded-lg w-52 text-gray-700 space-y-1 z-50"
                    >
                        {links}
                    </ul>
                </div>
                <div className='hidden lg:flex'><Logo></Logo></div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-gray-600 font-medium">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-3">
                {user ? (
                    <PhotoUser />
                ) : (
                    <span className="text-sm text-gray-600">{user?.email}</span>
                )}

                {user ? (
                    <button
                        onClick={handleLogOut}
                        className="btn rounded-full bg-[#176AE5] text-white hover:bg-[#145bcc] px-5"
                    >
                        <Link to="/login">Logout</Link>
                    </button>
                ) : (
                    <div className="flex gap-2">
                        <Link
                            to="/login"
                            className="btn rounded-full bg-[#176AE5] text-white hover:bg-[#145bcc] px-5"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signUp"
                            className="btn rounded-full bg-[#176AE5] text-white hover:bg-[#145bcc] px-5"
                        >
                            Register
                        </Link>
                    </div>
                )}

                <ThemeToggle />
            </div>
        </div>
        </div>
    );
};

export default Navbar;