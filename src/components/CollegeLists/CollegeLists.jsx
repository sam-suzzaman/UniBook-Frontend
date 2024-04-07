import React from "react";
import CollegeItem from "./CollegeItem";
import { useAddmissionContext } from "../../pages/AdmissionPage";

let collegeMockData = [
    { _id: "1", name: "Dhaka University" },
    { _id: "2", name: "Rajsahi University" },
    { _id: "3", name: "Jaitya Kabi Kazi Nazrul Islam University" },
];

const CollegeLists = () => {
    const data = useAddmissionContext();

    return (
        <div className=" bg-gray-50 px-4 py-8 rounded-md">
            <div className="">
                <h5 className="text-center font-semibold text-lg md:text-xl capitalize text-secondary">
                    apply now
                </h5>
                <p className="text-center font-normal text-[14px] text-gray-500 mt-1">
                    To apply select one ollege first
                </p>
            </div>
            <div className="flex flex-col gap-3 mt-12">
                {collegeMockData?.map((college) => (
                    <CollegeItem college={college} />
                ))}
            </div>
        </div>
    );
};

export default CollegeLists;
