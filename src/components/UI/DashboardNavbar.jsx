import React from "react";
import { Link } from "react-router-dom";
import { CiFolderOn } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";

const DashboardNavbar = ({ toggleSidebar }) => {
    return (
        <div className="bg-white shadow-md w-full flex justify-between items-center  h-[60px]">
            <div className="w-full max-w-[1200px] mx-auto px-4 min-[1200px]:px-0 flex justify-between items-center">
                <div className="font-bold text-base md:text-lg capitalize text-primary flex items-center">
                    <GiHamburgerMenu
                        className="cursor-pointer mr-4 text-[32px] md:text-[35px] transition-all duration-300  bg-neutral p-[7px] hover:bg-secondary hover:text-white rounded-sm min-[993px]:hidden"
                        onClick={toggleSidebar}
                    ></GiHamburgerMenu>
                    dashboard.
                </div>
                <Link
                    to="/"
                    className=" capitalize text-xs md:text-sm font-medium text-primary bg-neutral px-2 py-1 rounded-sm hover:bg-secondary hover:text-white transition-all duration-300 inline-flex items-center"
                >
                    <IoHomeOutline className="mr-1 text-sm font-bold" /> home
                </Link>
            </div>
        </div>
    );
};

export default DashboardNavbar;
