import React from "react";
import thumb from "../../assets/CampusThumb/College1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CollegeCard = () => {
    return (
        <div className="college-card shadow-md p-4 flex flex-col justify-between h-full">
            <div className="thumb w-full">
                <img
                    src={thumb}
                    alt="college thumbnail"
                    className="w-full object-cover rounded-md"
                />
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
                    <span className="text-[16px] font-bold capitalize text-gray-900">
                        Researches:
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
                <Link className="w-full bg-secondary inline-flex justify-center items-center text-white font-medium text-[17px] py-1 rounded-sm hover:bg-primary transition-all duration-200 ease-in">
                    <FaArrowUpRightFromSquare className="mr-2 text-[14px]" />
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CollegeCard;
