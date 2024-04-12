import React from "react";
import styled from "styled-components";

const PasswordResetPage = () => {
    return (
        <Wrapper>
            <div className="shadow-lg px-4 py-8 rounded-sm">
                <h4 className="font-bold capitalize text-lg sm:text-xl text-primary text-center mb-4">
                    reset password
                </h4>
                <form action="" className="mt-4 update-form">
                    <div className="input-container">
                        {/* old password */}
                        <div className="">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">
                                        Old Password
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

                        {/* new password */}
                        <div className="">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">
                                        New Password
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

                        {/* confirm password */}
                        <div className="">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">
                                        Confirm Password
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
                        <button className="">reset</button>
                        <button
                            className="cancel ml-3"
                            onClick={() => setIsEdit(false)}
                        >
                            cancel
                        </button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .update-form .input-container {
        display: grid;
        grid-template-columns: minmax(auto, 300px);
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

export default PasswordResetPage;
