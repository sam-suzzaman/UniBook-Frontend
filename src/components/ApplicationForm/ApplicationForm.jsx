import React from "react";
import { useAddmissionContext } from "../../pages/AdmissionPage";
import styled from "styled-components";

const ApplicationForm = () => {
    const { step, stepData } = useAddmissionContext();

    return (
        <div className=" bg-gray-50 px-4 py-8 rounded-md">
            <div className="">
                <h5 className="text-center font-semibold text-lg md:text-xl capitalize text-secondary">
                    Application form
                </h5>
                <p className="text-center font-normal text-[14px] text-gray-500 mt-1">
                    Fill up form properly to complete apply
                </p>
            </div>
            <div className="flex flex-col gap-3 mt-12">
                <Wrapper>
                    <form className="auth-form">
                        {/* Input: candidate name */}
                        <div className="input-row">
                            <label htmlFor="username" className="label">
                                Selected College:
                            </label>
                            <input
                                type="text"
                                className="auth-input"
                                disabled
                                defaultValue={stepData?.stepOneValue.name}
                            />
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: candidate name */}
                        <div className="input-row">
                            <label htmlFor="username" className="label">
                                candidate's name:
                            </label>
                            <input type="text" className="auth-input" />
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: subject */}
                        <div className="input-row">
                            <label htmlFor="username" className="label">
                                select subject(todo)
                            </label>
                            {/* <input type="text" className="auth-input" /> */}
                            <select name="" id="" className="auth-input">
                                <option value="">
                                    Electrical and Electronic Engineering (EEE)
                                </option>
                                <option value="">
                                    Computer and science Engineering (CSE)
                                </option>
                                <option value="">
                                    environmental and science Engineering (ESE)
                                </option>
                            </select>
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: Email */}
                        <div className="input-row">
                            <label htmlFor="email" className="label">
                                Candidate's email:
                            </label>
                            <input type="email" className="auth-input" />
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: phone */}
                        <div className="input-row">
                            <label htmlFor="phone" className="label">
                                Candidate's moible number:
                            </label>
                            <input type="tel" className="auth-input" />
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: DOB */}
                        <div className="input-row">
                            <label htmlFor="dob" className="label">
                                Candidate's Date of birth:(todo)
                            </label>
                            <input type="date" className="auth-input" />
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: address */}
                        <div className="input-row">
                            <label htmlFor="address" className="label">
                                Candidate's Address:
                            </label>
                            <input type="text" className="auth-input" />
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: photo */}
                        <div className="input-row">
                            <label htmlFor="avatar" className="label">
                                Candidate's Photo:
                            </label>
                            <input type="file" className="auth-input" />
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        <div className="btn-row">
                            <button className="auth-btn">Submit</button>
                        </div>
                    </form>
                </Wrapper>
            </div>
        </div>
    );
};

const Wrapper = styled.div`
    .auth-form-container {
        position: relative;
        width: 100%;
        max-width: 400px;
        background: #fff;
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 40px;
    }
    @media screen and (max-width: 400px) {
        padding: 12px;
        .auth-form-container {
            padding: 15px;
        }
    }

    .auth-form-title {
        font-size: calc(1rem + 0.42vw);
        font-weight: bold;
        text-transform: uppercase;
        color: var(--primary-clr);
        text-align: center;
        margin-bottom: 24px;
    }
    .input-row {
        width: 100%;
        margin-top: 17px;
    }
    .auth-form .label {
        font-weight: 600;
        font-size: 13px;
        text-transform: capitalize;
        padding: 0;
        margin-bottom: 4px;
    }
    .auth-form .input-row .auth-input {
        outline: none;
        width: 100%;
        border: 2px solid #9a9a9a;
        border-radius: 4px;
        padding: 4px 10px;
        font-size: 15px;
        font-weight: 600;
        transition: border 0.3s linear;
    }
    .auth-form .input-row .auth-input:focus {
        border-color: var(--secondary-clr);
        outline: none;
    }

    .auth-form .error-display {
        font-weight: 600;
        font-size: 12px;
        text-transform: capitalize;
        padding: 0;
        margin-top: 4px;
        color: #a90000;
    }

    .auth-form .btn-row {
        margin-top: 25px;
    }
    .auth-form .btn-row .auth-btn {
        outline: none;
        width: 100%;
        background-color: var(--secondary-clr);
        color: #fff;
        text-transform: capitalize;
        font-size: 17px;
        font-weight: 400;
        letter-spacing: 1px;
        padding: 4px 20px;
        border-radius: 4px;
        transition: background-color 0.3s linear;
    }
    .auth-form .btn-row .auth-btn:hover {
        background-color: var(--primary-clr);
    }
`;
export default ApplicationForm;
