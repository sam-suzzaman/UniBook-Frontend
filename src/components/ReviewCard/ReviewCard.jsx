import React from "react";
import avatar from "../../assets/avatar.jpeg";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

const ReviewCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-md px-4 py-6 w-full max-w-[600px] mx-auto">
            {/* Profile row */}
            <div className="flex justify-start">
                <div className="w-12 rounded-md">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="">
                    <h4 className="font-bold text-[16px] capitalize text-primary">
                        Donald obama
                    </h4>
                    <p className="font-medium capitalize text-[14px]">
                        10 january, 2024
                    </p>
                </div>
            </div>
            {/* Rating value row */}
            <div className="ml-12  mt-1">
                <p className="font-semibold text-[13px] text-primary flex flex-row items-center ">
                    <Rating
                        className="text-[17px] mr-1 text-accent"
                        initialRating={4}
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                        readonly
                    ></Rating>
                    <span className="">(4.5/5)</span>
                </p>
            </div>

            {/* Feedback */}
            <div className=" mt-2">
                <p className="text-xs font-medium text-justify mb-2 leading-[23px] text-gray-700">
                    Evergreen University provided me with a solid education and
                    valuable experiences.
                </p>
                <p className="text-xs font-medium text-justify mb-2 leading-[23px] text-gray-700">
                    The professors were knowledgeable and approachable, and I
                    appreciated the diverse range of courses offered.
                </p>
                <p className="text-xs font-medium text-justify leading-[23px] text-gray-700">
                    However, I think there could be more resources available for
                    career guidance and internship opportunities.
                </p>
            </div>

            {/* college name */}
            <div className="mt-4">
                <p className="text-[16px] font-semibold capitalize text-gray-500 flex justify-start items-center">
                    <ImPointRight className="mr-[6px]" /> Jatiya Kabi Kazi
                    Nazrul Islam University
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;
