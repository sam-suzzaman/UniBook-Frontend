import React from "react";
import avatar from "../../assets/avatar.jpeg";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

const ReviewCard = ({ review }) => {
    const createdAt = new Date(review?.createdAt).toLocaleString();

    return (
        <div className="bg-white shadow-lg rounded-md px-4 py-6 w-full max-w-[600px] mx-auto">
            {/* Profile row */}
            <div className="flex justify-start">
                <div className="w-12 rounded-md">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="">
                    <h4 className="font-bold text-[16px] capitalize text-primary">
                        {review?.userID?.username}
                    </h4>
                    <p className="font-medium capitalize text-[11px]">
                        {createdAt}
                    </p>
                </div>
            </div>
            {/* Rating value row */}
            <div className="ml-12">
                <p className="font-semibold text-[13px] text-primary flex flex-row items-center ">
                    <Rating
                        className="text-[17px] mr-1 text-accent"
                        initialRating={review?.rating}
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                        readonly
                    ></Rating>
                    <span className="">({review?.rating}/5)</span>
                </p>
            </div>

            {/* Feedback */}
            <div className=" mt-2">
                <p className="text-xs font-medium text-justify mb-2 leading-[23px] text-gray-700 whitespace-pre-line">
                    {review?.comment}
                </p>
            </div>

            {/* college name */}
            <div className="mt-4">
                <p className="text-[13px] font-semibold capitalize text-gray-500 flex justify-start items-center">
                    <ImPointRight className="mr-[6px]" />{" "}
                    {review?.collegeID?.collegeName}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;
