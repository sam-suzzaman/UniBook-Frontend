import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
    usePasswordResetMutation,
    useUserLogoutMutation,
} from "../redux/features/api/baseApi";
import { userLogout } from "../redux/features/UserSlice";
import { useNavigate } from "react-router-dom";

const PasswordResetPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const dispatch = useDispatch();
    const { email } = useSelector((state) => state.userSlice);
    const [passwordResetHandler, { data, isLoading, isError, error }] =
        usePasswordResetMutation();
    const [logoutHandler, { data: logoutData }] = useUserLogoutMutation();

    let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { oldPassword, newPassword, confirmPassword } = data;
        if (newPassword !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Confirm password not matched",
            });
        } else {
            const data = { email, oldPassword, newPassword };

            const res = await passwordResetHandler(data);
            if (res?.data?.status) {
                Swal.fire({
                    icon: "success",
                    title: "Reset",
                    text: "Password reset successfully",
                });
                reset();
                dispatch(userLogout());
                navigate("/auth");
            } else {
                Swal.fire({
                    icon: "error",
                    title: res?.error?.data?.message,
                    text: res?.error?.data?.error || res?.error?.data?.result,
                });
            }
        }
    };

    const handleCancelBtn = () => {
        navigate("/dashboard");
    };

    return (
        <Wrapper>
            <div className="shadow-lg px-4 py-8 rounded-sm">
                <h4 className="font-bold capitalize text-lg sm:text-xl text-primary text-center mb-4">
                    reset password
                </h4>
                <form
                    action=""
                    className="mt-4 update-form"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
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
                                    type={`${
                                        isShowPassword ? "text" : "password"
                                    }`}
                                    placeholder="Type here"
                                    className="input input-sm rounded-sm input-bordered w-full max-w-xs"
                                    {...register("oldPassword", {
                                        required: {
                                            value: true,
                                            message: "Password is required",
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Password is too long(max 20char)",
                                        },
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password is too short (min 6char)",
                                        },
                                    })}
                                />
                                {errors?.oldPassword && (
                                    <div className="label">
                                        <span className="label-text-alt text-xs font-medium text-red-600">
                                            {errors?.oldPassword?.message}
                                        </span>
                                    </div>
                                )}
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
                                    type={`${
                                        isShowPassword ? "text" : "password"
                                    }`}
                                    placeholder="Type here"
                                    className="input input-sm rounded-sm input-bordered w-full max-w-xs"
                                    {...register("newPassword", {
                                        required: {
                                            value: true,
                                            message: "Password is required",
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Password is too long(max 20char)",
                                        },
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password is too short (min 6char)",
                                        },
                                    })}
                                />
                                {errors?.newPassword && (
                                    <div className="label">
                                        <span className="label-text-alt text-xs font-medium text-red-600">
                                            {errors?.newPassword?.message}
                                        </span>
                                    </div>
                                )}
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
                                    type={`${
                                        isShowPassword ? "text" : "password"
                                    }`}
                                    placeholder="Type here"
                                    className="input input-sm rounded-sm input-bordered w-full max-w-xs"
                                    {...register("confirmPassword", {
                                        required: {
                                            value: true,
                                            message: "Password is required",
                                        },
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Password is too long(max 20char)",
                                        },
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password is too short (min 6char)",
                                        },
                                    })}
                                />
                                {errors?.confirmPassword && (
                                    <div className="label">
                                        <span className="label-text-alt text-xs font-medium text-red-600">
                                            {errors?.confirmPassword?.message}
                                        </span>
                                    </div>
                                )}
                            </label>
                        </div>

                        {/* show password */}
                        <div
                            className="flex items-center justify-start mt-1"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            <input
                                type="checkbox"
                                defaultChecked={isShowPassword}
                                className="checkbox checkbox-primary rounded-sm checkbox-xs mr-2 w-1 h-1"
                            />
                            <span className="label-text text-xs font-semibold">
                                Show Password
                            </span>
                        </div>
                    </div>
                    <div className="submit-btn mt-4">
                        <button className="" type="submit">
                            {isLoading ? "Loading..." : "reset"}
                        </button>
                        <button
                            className="cancel ml-3"
                            onClick={handleCancelBtn}
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
