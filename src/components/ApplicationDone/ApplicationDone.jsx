import React from "react";
import { useAddmissionContext } from "../../pages/AdmissionPage";
import done from "../../assets/success.png";
import { Link } from "react-router-dom";

const ApplicationDone = () => {
    const { step, stepData } = useAddmissionContext();
    return (
        <div className="py-[3vh]">
            <img
                src={done}
                alt="success"
                className="w-full max-w-[200px] mx-auto mb-4"
            />
            <h5 className="text-center font-bold capitalize text-xl md:text-2xl text-secondary">
                !!! Congratulation !!!
            </h5>
            <p className="text-xs md:text-sm font-medium text-gray-600 text-center mt-4 px-10">
                You have successfylly applied and admitted to
                <span className="font-bold capitalize ml-1 text-primary text-xs md:text-sm">
                    {stepData?.stepOneValue?.name || "Dhaka University"}
                </span>
            </p>
            <div className="flex justify-center mt-6">
                <Link
                    to="#"
                    className="capitalize inline-block  px-6 py-2 bg-secondary text-white text-xs md:text-sm rounded-sm transition-all duration-300 hover:bg-primary"
                >
                    go to my college
                </Link>
            </div>
        </div>
    );
};

export default ApplicationDone;
