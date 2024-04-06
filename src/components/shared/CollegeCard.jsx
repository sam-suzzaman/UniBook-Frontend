import React from "react";
import thumb from "../../assets/CampusThumb/College1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";

const CollegeCard = () => {
    return (
        <div className="college-card shadow-md p-4 flex flex-col justify-between h-full group">
            <div className="thumb w-full relative transition-all duration-300">
                <img
                    src={thumb}
                    alt="college thumbnail"
                    className="w-full object-cover rounded-md"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h6 className="inline-flex justify-center items-center border-[2px] border-accent px-2 py-1 rounded-sm text-accent text-base font-semibold scale-0 group-hover:scale-100 transition-all duration-300 delay-100">
                        <span className="mr-[5px]"> 4.6</span> <IoStarOutline />
                    </h6>
                </div>
            </div>
            <div className="content mt-4">
                <h3 className="c-name text-base sm:text-lg font-bold capitalize text-primary">
                    Jatiya Kabi Kazi Nazrul Islam University
                </h3>
                <p className="a-date mt-2">
                    <span className="text-[16px] font-bold capitalize text-gray-900 ">
                        Addmission Dates:
                    </span>
                    <ul className="pl-1 mt-[3px]">
                        <li className="text-[14px] mb-[3px] font-medium flex justify-start items-center">
                            <FaArrowRight className="text-[11px] mr-1" />
                            <span className="">
                                <span className="font-bold mr-2">
                                    Spring Term:
                                </span>
                                January 15 - April 30
                            </span>
                        </li>
                        <li className="text-[14px] font-medium flex justify-start items-center">
                            <FaArrowRight className="text-[11px] mr-1" />
                            <span className="">
                                <span className=" font-bold mr-2">
                                    Autum Term:
                                </span>
                                September 1 - December 15
                            </span>
                        </li>
                    </ul>
                </p>
                <p className="Research mt-2">
                    <span className=" font-bold capitalize text-gray-900">
                        <span className="text-[16px]">Researches:</span>
                        <span className="bg-neutral text-[14px] ml-1 px-1 rounded-full py-[2px]">
                            10
                        </span>
                    </span>
                    <p className="mt-[3px] text-xs font-medium text-justify">
                        It has a rich history of research in business
                        management, economics, and so on departments.
                    </p>
                </p>
                <p className="events mt-2">
                    <span className="text-[16px] font-bold capitalize text-gray-900 ">
                        Events:
                    </span>
                    <ul className="pl-1 mt-[3px]">
                        <li className="text-[14px] mb-[3px] font-medium flex justify-start items-center">
                            <FaArrowRight className="text-[11px] mr-1" />
                            <span>
                                <span className=" font-bold mr-2">
                                    Career Expo:
                                </span>
                                February 5
                            </span>
                        </li>
                        <li className="text-[14px] font-medium flex justify-start items-center">
                            <FaArrowRight className="text-[11px] mr-1" />
                            <span>
                                <span className=" font-bold mr-2">
                                    Diversity Week:
                                </span>
                                April 10 - 14
                            </span>
                        </li>
                        <li className="text-[14px] font-medium flex justify-start items-center">
                            <FaArrowRight className="text-[11px] mr-1" />
                            <span>
                                <span className=" font-bold mr-2">
                                    Entrepreneurship Summit:
                                </span>
                                May 20 - 22
                            </span>
                        </li>
                    </ul>
                </p>
                <p className="events mt-2">
                    <span className="text-[16px] font-bold capitalize text-gray-900 ">
                        Sports:
                    </span>
                    <ul className="pl-1 mt-[3px]">
                        <li className="text-[14px] mb-[3px] font-medium flex justify-start items-center">
                            <FaArrowRight className="text-[11px] mr-1" />
                            Cricket
                        </li>
                        <li className="text-[14px] font-medium flex justify-start items-center">
                            <FaArrowRight className="text-[11px] mr-1" />
                            Football
                        </li>
                        <li className="text-[14px] font-medium flex justify-start items-center">
                            <FaArrowRight className="text-[11px] mr-1" />
                            Volleyball
                        </li>
                    </ul>
                </p>
            </div>
            <div className="detail-btn-row mt-6">
                <Link
                    to={`/college/${1}`}
                    className="w-full bg-secondary inline-flex justify-center items-center text-white font-medium text-[17px] py-1 rounded-sm hover:bg-primary transition-all duration-200 ease-in"
                >
                    <FaArrowUpRightFromSquare className="mr-2 text-[14px]" />
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CollegeCard;
