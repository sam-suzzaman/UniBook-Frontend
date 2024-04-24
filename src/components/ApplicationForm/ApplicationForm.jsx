import React, { useEffect } from "react";
import { useAddmissionContext } from "../../pages/AdmissionPage";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useAdmistUserMutation } from "../../redux/features/api/baseApi";

const ApplicationForm = () => {
    const { userID } = useSelector((state) => state.userSlice);
    //  const { email } = useSelector((state) => state.userSlice);
    const [admitUser, { data: admission, isLoading, isError, error }] =
        useAdmistUserMutation();

    const { step, setStep, stepData, setStepData } = useAddmissionContext();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const candidateNameWatch = watch("candidateName");
    const subjectWatch = watch("subject");
    const emailWatch = watch("email");
    const mobileWatch = watch("mobile");
    const dobWatch = watch("dob");
    const addressWatch = watch("address");

    // updating state values
    useEffect(() => {
        setStepData({
            ...stepData,
            candidateName: candidateNameWatch,
            selectedSubject: subjectWatch,
            candidateEmail: emailWatch,
            candidateMobile: mobileWatch,
            candidateDOB: dobWatch,
            candidateAddress: addressWatch,
        });
    }, [
        candidateNameWatch,
        subjectWatch,
        emailWatch,
        mobileWatch,
        dobWatch,
        addressWatch,
    ]);

    const handleFormSubmission = async (data) => {
        const { candidateName, address, dob, email, mobile, subject } = data;
        const applicationData = {
            collegeID: stepData.selectedCollegeID,
            userID,
            candidateName,
            candidateEmail: email,
            selectedSubject: subject,
            candidatePhoneNumber: mobile,
            candidateDOB: dob,
            candidateAddress: address,
        };
        console.log(applicationData);
        try {
            const res = await admitUser(applicationData);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

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
            <div className="mt-8">
                <h4 className="bg-secondary bg-opacity-15 px-2 py-2 rounded-md text-center">
                    <span className="text-sm font-medium mr-2 text-gray-600 ">
                        Applying to:
                    </span>
                    <span className="text-sm font-bold text-primary">
                        {stepData?.selectedCollegeName}
                    </span>
                </h4>
            </div>
            <div className="flex flex-col gap-3 mt-6">
                <Wrapper>
                    <form
                        className="auth-form"
                        onSubmit={handleSubmit(handleFormSubmission)}
                        autoComplete="off"
                    >
                        {/* Input: candidate name */}
                        <div className="input-row">
                            <label htmlFor="candidateName" className="label">
                                candidate's name:
                            </label>
                            <input
                                type="text"
                                className="auth-input"
                                defaultValue={stepData?.candidateName}
                                {...register("candidateName", {
                                    required: {
                                        value: true,
                                        message: "Candidate name is required",
                                    },
                                })}
                            />
                            {errors?.candidateName && (
                                <p className="error-display">
                                    {errors?.candidateName?.message}
                                </p>
                            )}
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: subject */}
                        <div className="input-row">
                            <label htmlFor="subject" className="label">
                                choose your subject:
                            </label>
                            {/* <input type="text" className="auth-input" /> */}
                            <select
                                name=""
                                id=""
                                className="auth-input capitalize"
                                defaultValue={stepData?.selectedSubject}
                                {...register("subject", {
                                    required: {
                                        value: true,
                                        message: "Select one subject",
                                    },
                                    validate: {
                                        valueType: (value) => {
                                            return (
                                                value !== "none" ||
                                                "Select a subject"
                                            );
                                        },
                                    },
                                })}
                            >
                                <option selected disabled value="none">
                                    Subject Name
                                </option>
                                <option value="eee" className="capitalize">
                                    Electrical and Electronic Engineering (EEE)
                                </option>
                                <option value="cse" className="capitalize">
                                    Computer and science Engineering (CSE)
                                </option>
                                <option value="ese" className="capitalize">
                                    environmental and science Engineering (ESE)
                                </option>
                            </select>
                            {errors?.subject && (
                                <p className="error-display">
                                    {errors?.subject?.message}
                                </p>
                            )}
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: Email */}
                        <div className="input-row">
                            <label htmlFor="email" className="label">
                                Candidate's email:
                            </label>
                            <input
                                type="email"
                                className="auth-input"
                                defaultValue={stepData?.candidateEmail}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "an email is required",
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                        message: "a valid email required",
                                    },
                                })}
                            />
                            {errors?.email && (
                                <p className="error-display">
                                    {errors?.email?.message}
                                </p>
                            )}
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: phone */}
                        <div className="input-row">
                            <label htmlFor="phone" className="label">
                                Candidate's moible number:
                            </label>
                            <input
                                type="tel"
                                className="auth-input"
                                defaultValue={stepData?.candidateMobile}
                                {...register("mobile", {
                                    required: {
                                        value: true,
                                        message: "A contact number required",
                                    },
                                })}
                            />
                            {errors?.mobile && (
                                <p className="error-display">
                                    {errors?.mobile?.message}
                                </p>
                            )}
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: DOB */}
                        <div className="input-row">
                            <label htmlFor="dob" className="label">
                                Candidate's Date of birth:(todo)
                            </label>
                            <input
                                type="date"
                                className="auth-input"
                                defaultValue={stepData?.candidateDOB}
                                {...register("dob", {
                                    required: {
                                        value: true,
                                        message: "Candidate DOB required",
                                    },
                                })}
                            />
                            {errors?.dob && (
                                <p className="error-display">
                                    {errors?.dob?.message}
                                </p>
                            )}
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: address */}
                        <div className="input-row">
                            <label htmlFor="address" className="label">
                                Candidate's Address:
                            </label>
                            <input
                                type="text"
                                className="auth-input"
                                defaultValue={stepData?.candidateAddress}
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Candidate address required",
                                    },
                                })}
                            />
                            {errors?.address && (
                                <p className="error-display">
                                    {errors?.address?.message}
                                </p>
                            )}
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* Input: photo */}
                        <div className="input-row">
                            <label htmlFor="avatar" className="label">
                                Candidate's Photo:
                            </label>
                            <input
                                type="file"
                                className="auth-input"
                                {...register("photo", {
                                    required: {
                                        value: true,
                                        message: "Candidate photo required",
                                    },
                                })}
                            />
                            {errors?.photo && (
                                <p className="error-display">
                                    {errors?.photo?.message}
                                </p>
                            )}
                            {/* <p className="error-display">something wrong</p> */}
                        </div>
                        {/* <div className="btn-row">
                            <button className="auth-btn">Submit</button>
                        </div> */}
                        <div className="flex justify-center mt-8 gap-4">
                            <button
                                onClick={() => setStep(1)}
                                className="capitalize font-semibold text-base py-1 px-6 bg-warning rounded-sm text-white transition-all duration-300 hover:bg-secondary disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                prev
                            </button>
                            <button
                                type="submit"
                                className="capitalize font-semibold text-base py-1 px-6 bg-secondary rounded-sm text-white transition-all duration-300 hover:bg-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                submit
                            </button>
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
        margin-top: 30px;
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
        padding: 8px 20px;
        border-radius: 4px;
        transition: background-color 0.3s linear;
    }
    .auth-form .btn-row .auth-btn:hover {
        background-color: var(--primary-clr);
    }
`;
export default ApplicationForm;
