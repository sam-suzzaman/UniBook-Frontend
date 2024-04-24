import React, { createContext, useContext, useState } from "react";
import {
    AdmissionStepBar,
    ApplicationDone,
    ApplicationForm,
    CollegeLists,
} from "../components";

// Create a context
const Context = createContext();

const AdmissionPage = () => {
    const [step, setStep] = useState(1);
    const [stepData, setStepData] = useState({
        isClgSelect: false,
        isAllowStepThree: false,
    });

    const passingValues = {
        step,
        setStep,
        stepData,
        setStepData,
    };
    return (
        <Context.Provider value={passingValues}>
            <div className="">
                <AdmissionStepBar />
            </div>
            <div className="w-full max-w-[1000px] max-w-[999px]:px-4 py-8 mx-auto">
                {step == 1 && <CollegeLists />}
                {step == 2 && <ApplicationForm />}
                {step == 3 && <ApplicationDone />}
            </div>
        </Context.Provider>
    );
};

export const useAddmissionContext = () => useContext(Context);
export default AdmissionPage;
