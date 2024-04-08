import React from "react";
import { useAddmissionContext } from "../../pages/AdmissionPage";
import styled from "styled-components";

const AdmissionStepBar = () => {
    const { step, setStep, stepData } = useAddmissionContext();
    const numberOfTotalSteps = 3;

    const handleNext = () => {
        if (step < numberOfTotalSteps) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleSetStep = (value) => {};

    const progressWidth = ((step - 1) / (numberOfTotalSteps - 1)) * 100 + "%";
    return (
        <Wrapper>
            <div className="progress-steps">
                <div className="top">
                    <div className="progress">
                        <span style={{ width: progressWidth }}></span>
                    </div>
                    {/* <div className="steps">
                        {[...Array(numberOfTotalSteps)].map((_, index) => {
                            let isDisabled;
                            switch (index) {
                                case 0:
                                    isDisabled = false;
                                case 1:
                                    isDisabled = !stepData?.isClgSelect;
                                case 2:
                                    isDisabled =
                                        !stepData?.isClgSelect &&
                                        !stepData?.isAllowStepThree;
                                default:
                                    break;
                            }
                            console.log(isDisabled);
                            return (
                                <button
                                    key={index}
                                    className={`addStep disabled:bg-gray-300 disabled:cursor-not-allowed ${
                                        index + 1 === step ? "active" : ""
                                    }`}
                                    disabled={isDisabled}
                                    onClick={() => setStep(index + 1)}
                                >
                                    <span>{index + 1}</span>
                                </button>
                            );
                        })}
                    </div> */}
                    <div className="steps">
                        <button
                            className={`addStep disabled:bg-gray-300 disabled:cursor-not-allowed ${
                                step === 1 ? "active" : ""
                            }`}
                            onClick={() => setStep(1)}
                        >
                            <span>1</span>
                        </button>
                        <button
                            className={`addStep disabled:bg-gray-300 disabled:cursor-not-allowed ${
                                step === 2 ? "active" : ""
                            }`}
                            onClick={() => setStep(2)}
                            disabled={!stepData?.isClgSelect}
                        >
                            <span>2</span>
                        </button>
                        <button
                            className={`addStep disabled:bg-gray-300 disabled:cursor-not-allowed ${
                                step === 3 ? "active" : ""
                            }`}
                            onClick={() => setStep(3)}
                            disabled={
                                !stepData?.isClgSelect ||
                                !stepData?.isAllowStepThree
                            }
                        >
                            <span>3</span>
                        </button>
                    </div>
                </div>
                {/* <div className="buttons">
                    <button
                        className={`btn ${step === 1 ? "disabled" : ""}`}
                        onClick={handlePrev}
                        disabled={step === 1}
                    >
                        Previous
                    </button>
                    <button
                        className={`btn ${
                            step === numberOfTotalSteps ? "disabled" : ""
                        }`}
                        onClick={handleNext}
                        disabled={step === numberOfTotalSteps}
                    >
                        Next
                    </button>
                </div> */}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .progress-steps {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        margin-top: 30px;
    }
    .progress-steps .top {
        position: relative;
    }
    .progress-steps .top .progress {
        width: 100%;
        height: 3px;
        background-color: var(--neutral-clr);
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: -1;
    }
    .progress-steps .top .progress span {
        position: absolute;
        width: 0%;
        height: 100%;
        left: 0px;
        top: 0px;
        background: var(--secondary-clr);
        transition: 0.5s;
    }
    .progress-steps .top .steps {
        display: flex;
        justify-content: space-between;
    }
    .progress-steps .top .steps .addStep {
        background-color: var(--neutral-clr);
        border: 3px solid var(--neutral-clr);
        color: var(--primary-clr);
        font-weight: semibold;
        font-size: 19px;
        border-radius: 4px;
        padding: 3px 20px;
        cursor: pointer;
    }
    .progress-steps .top .steps .addStep:disabled {
        background-color: #e0e0e0;
        border: 3px solid #e0e0e0;
        color: var(--primary-clr);
        cursor: not-allowed;
    }
    .progress-steps .top .steps .addStep.active {
        border-color: var(--secondary-clr);
        background-color: var(--secondary-clr);
        color: var(--accent-clr);
        font-weight: bold;
        transition: border 1s;
    }

    .progress-steps .buttons {
        display: flex;
        justify-content: center;
        gap: 0px 20px;
    }

    .progress-steps .buttons .btn {
        outline: 0px;
        border: 0px;
        padding: 10px 25px;
        border-radius: 5px;
        cursor: pointer;
        background-color: #3498db;
        font-weight: bold;
        color: white;
        transition: color 0.5s;
    }

    .progress-steps .buttons .btn.disabled {
        background-color: #e0e0e0;
        color: #bdbdbd;
        cursor: no-drop;
    }
`;
export default AdmissionStepBar;
