import React, { use, useState } from 'react';
import { BiSolidFridge } from 'react-icons/bi';
import { Link, NavLink, useNavigate } from 'react-router';
import PhotoUser from '../Profile/PhotoUser';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut, loading } = use(AuthContext);
    const navigate = useNavigate();
    const [theme, setTheme] = useState("light");

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
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>Home</NavLink>

            {user && <NavLink to="/MyItems" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>My Items</NavLink>}

            <NavLink to="/fridge" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>Fridge</NavLink>


            {user && <NavLink to="/AddFood" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>Add Food</NavLink>}

            <NavLink to="/contactUs" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>Contact Us</NavLink>
        </>
    )

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

// Set initial theme on mount
    // useEffect(() => {
    //     const savedTheme = localStorage.getItem("theme");
    //     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    //     const systemTheme = prefersDark ? "dark" : "light";
    //     const current = savedTheme || systemTheme;

    //     setTheme(current);
    //     document.documentElement.setAttribute("data-theme", current);
    // }, []);


    return (
        <div className="navbar bg-base-100 shadow-md rounded-xl px-4 py-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-gray-600 lg:hidden hover:bg-gray-100">
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
                <Link to="/" className="text-xl font-bold hidden lg:flex items-center gap-2">
                    <BiSolidFridge className="text-[#176AE5] text-2xl" />
                    BD Food Storage
                </Link>
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

                {/* 🌙 Theme toggle */}

                <label className="swap swap-rotate ml-3 md:p-2 p-1 rounded-full bg-primary text-white hover:bg-primary-focus cursor-pointer transition duration-200">
                    <input
                        type="checkbox"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                    />
                    {/* Sun icon (Light mode) */}
                    <svg
                        className="swap-off w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64 17.66L4.22 19.07a1 1 0 001.42 1.42l1.41-1.41a1 1 0 10-1.41-1.42zM1 13h2a1 1 0 100-2H1a1 1 0 000 2zm10-9a1 1 0 00-1 1v2a1 1 0 102 0V5a1 1 0 00-1-1zm9 9h2a1 1 0 100-2h-2a1 1 0 100 2zm-2.05-7.36a1 1 0 00-1.42-1.42L17.66 5.64a1 1 0 001.42 1.42l-1.41-1.42zM12 7a5 5 0 100 10 5 5 0 000-10zm0 16a1 1 0 001-1v-2a1 1 0 10-2 0v2a1 1 0 001 1zm5.66-3.66l1.41 1.41a1 1 0 001.42-1.42l-1.41-1.41a1 1 0 00-1.42 1.42z" />
                    </svg>
                    {/* Moon icon (Dark mode) */}
                    <svg
                        className="swap-on w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2 1 1 0 00-1.33-1.13A10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;