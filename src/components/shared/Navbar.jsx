import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import SearchModal from "./SearchModal";

import { FaRegUser } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { signOut } from "firebase/auth";
import firebaseAuth from "../../firebase-init";
import { useDispatch, useSelector } from "react-redux";
import { socialLogOut } from "../../redux/features/UserSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const { username, email } = useSelector((state) => state.userSlice);

    const navbarData = [
        { id: 1, title: "home", path: "." },
        { id: 2, title: "college", path: "college" },
        { id: 3, title: "admission", path: "admission" },
        // { id: 4, title: "login", path: "/login" },
        // { id: 5, title: "home", path: "/" },
    ];
    const menu = navbarData?.map((item) => (
        <li key={item.id}>
            <NavLink
                to={item.path}
                className="capitalize rounded-sm navItem mr-2"
            >
                {item.title}
            </NavLink>
        </li>
    ));

    const handleSocialLogout = () => {
        signOut(firebaseAuth);
        dispatch(socialLogOut());
    };
    return (
        <div className="bg-base-100 shadow-sm border-b-2 border-gray-100 flex justify-center items-center">
            <div className="navbar w-full max-w-[1200px]">
                <div className="navbar-start">
                    {/* Hamburger Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="p-1 border-2 rounded-md hover:bg-secondary hover:text-white lg:hidden transition-all ease-in duration-150"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {menu}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="hidden lg:flex">
                        <img src={logo} alt="brand" className="w-[60px]" />
                    </Link>
                </div>

                <div className="navbar-center ">
                    {/* Center main-menu */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{menu}</ul>
                    </div>
                    <div className="lg:hidden">
                        <Link to="/">
                            <img src={logo} alt="brand" className="w-[60px]" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    {/* Search button */}
                    <button
                        className="btn btn-ghost btn-circle"
                        onClick={() =>
                            document.getElementById("SearchModal").showModal()
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                    {/* Search Modal */}
                    <SearchModal />

                    {/* Profile button */}
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-8 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-sm w-52"
                        >
                            <div className=" mb-3 mt-1">
                                <h6 className="text-center text-sm font-bold text-primary overflow-hidden text-ellipsis">
                                    - {username || "unknown"} -
                                </h6>
                            </div>
                            <li className="mb-1">
                                <NavLink
                                    to="/dashboard"
                                    className="rounded-sm bg-black bg-opacity-[0.024] "
                                >
                                    <FaRegUser className=" mr-[2px]" />
                                    Profile
                                </NavLink>
                            </li>
                            <li className="mb-1">
                                <NavLink
                                    to="/dashboard/my-college"
                                    className="rounded-sm bg-black bg-opacity-[0.024]"
                                >
                                    <LuSchool className=" mr-[2px]" />
                                    My College
                                </NavLink>
                            </li>
                            {!email && (
                                <li className="mb-1">
                                    <NavLink
                                        to="/auth"
                                        className="rounded-sm bg-black bg-opacity-[0.024]"
                                    >
                                        <IoIosLogIn className=" mr-[2px]" />
                                        Login
                                    </NavLink>
                                </li>
                            )}
                            {email && (
                                <li className="" onClick={handleSocialLogout}>
                                    <NavLink
                                        to="/auth"
                                        className="rounded-sm bg-black bg-opacity-[0.024] text-red-600"
                                    >
                                        <IoIosLogOut className=" mr-[2px]" />
                                        Logout
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
