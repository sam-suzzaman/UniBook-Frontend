import React from "react";
import styled from "styled-components";

const UpdateInfoForm = ({setIsEdit }) => {
    return (
        <Wrapper>
            <form action="" className="mt-4 update-form">
                <div className="input-container">
                    {/* Username */}
                    <div className="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-sm rounded-sm input-bordered w-full max-w-xs"
                            />
                            {/* <div className="label">
                        <span className="label-text-alt text-xs font-medium text-red-600">
                            Bottom Left label
                        </span>
                    </div> */}
                        </label>
                    </div>

                    {/* Email */}
                    <div className="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your Email</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-sm rounded-sm input-bordered w-full max-w-xs"
                            />
                            {/* <div className="label">
                        <span className="label-text-alt text-xs font-medium text-red-600">
                            Bottom Left label
                        </span>
                    </div> */}
                        </label>
                    </div>

                    {/* address */}
                    <div className="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Address</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-sm rounded-sm input-bordered w-full max-w-xs"
                            />
                            {/* <div className="label">
                        <span className="label-text-alt text-xs font-medium text-red-600">
                            Bottom Left label
                        </span>
                    </div> */}
                        </label>
                    </div>

                    {/* Contact */}
                    <div className="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">
                                    Contact Number
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-sm rounded-sm input-bordered w-full max-w-xs"
                            />
                            {/* <div className="label">
                        <span className="label-text-alt text-xs font-medium text-red-600">
                            Bottom Left label
                        </span>
                    </div> */}
                        </label>
                    </div>
                </div>
                <div className="submit-btn mt-4">
                    <button className="">update</button>
                    <button
                        className="cancel ml-3"
                        onClick={() => setIsEdit(false)}
                    >
                        cancel
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .update-form .input-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    @media screen and (max-width: 460px) {
        .update-form .input-container {
            grid-template-columns: 1fr;
            grid-gap: 20px;
        }
    }
    .update-form .submit-btn > button {
        margin-top: 10px;
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        background-color: var(--secondary-clr);
        padding: 6px 30px;
        border-radius: 4px;
        transition: all 0.3s linear;
    }

    .update-form .submit-btn > button.cancel {
        background-color: #ad0a0a;
    }
    .update-form .submit-btn > button.cancel:hover {
        background-color: #b33a3a;
    }

    .update-form .submit-btn > button:hover {
        background-color: var(--primary-clr);
    }
`;

export default UpdateInfoForm;
