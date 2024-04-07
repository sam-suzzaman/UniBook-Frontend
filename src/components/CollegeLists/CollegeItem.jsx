import React from "react";
import { FaRegSquare, FaRegCircle } from "react-icons/fa";
import { useAddmissionContext } from "../../pages/AdmissionPage";

const CollegeItem = ({ college }) => {
    const { setStep, stepData, setStepData } = useAddmissionContext();

    const handleCollegeSelection = (college) => {
        const updateData = { ...stepData, stepOneValue: { ...college } };
        setStepData(updateData);
        setStep(2);
    };
    return (
        <div
            onClick={() => handleCollegeSelection(college)}
            key={college._id}
            className="flex justify-start items-center bg-neutral bg-opacity-40 py-2 px-4 rounded-[5px] text-black hover:bg-opacity-75 transition-all duration-300 cursor-pointer"
        >
            <FaRegCircle className="text-[12px] font-bold mr-2" />
            <h3 className="font-medium text-[15px] capitalize">
                {college?.name}
            </h3>
        </div>
    );
};

export default CollegeItem;
