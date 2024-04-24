import React from "react";
import CollegeItem from "./CollegeItem";
import { useAddmissionContext } from "../../pages/AdmissionPage";
import { useGetAllCollegeQuery } from "../../redux/features/api/baseApi";
import Loading from "../shared/Loading";

const CollegeLists = () => {
    const {
        data: colleges,
        isLoading,
        isError,
        error,
    } = useGetAllCollegeQuery();
    const { setStep, stepData } = useAddmissionContext();

    const handleNextBtn = () => {
        setStep(2);
    };

    if (isLoading) {
        return (
            <div className="flex h-screen justify-center items-center">
                <Loading />
            </div>
        );
    }
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
                {colleges?.result?.map((college) => (
                    <CollegeItem college={college} key={college?._id} />
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={handleNextBtn}
                    className="capitalize font-semibold text-base py-1 px-6 bg-secondary rounded-sm text-white transition-all duration-300 hover:bg-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={!stepData?.isClgSelect}
                >
                    next
                </button>
            </div>
        </div>
    );
};

export default CollegeLists;
