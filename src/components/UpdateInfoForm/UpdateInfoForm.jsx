import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useUpdateProfileMutation } from "../../redux/features/api/baseApi";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/UserSlice";

const UpdateInfoForm = ({ setIsEdit, user }) => {
    const [
        updateProfileHandler,
        { data: updateUser, isLoading, isError, error },
    ] = useUpdateProfileMutation();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { username, email, contact, address } = data;
        let updateInfo = { email };

        if (username) {
            updateInfo = { ...updateInfo, username };
        }
        if (contact) {
            updateInfo = { ...updateInfo, contact };
        }
        if (address) {
            updateInfo = { ...updateInfo, address };
        }

        const res = await updateProfileHandler(updateInfo);

        if (res?.data?.status) {
            const updatedUserData = {
                username: res.data.result.username,
                email: res.data.result.email,
                id: res.data.result._id,
                isAdmitted: res.data.result.isAdmitted,
                department: res.data.result.department,
                address: res.data.result.address,
                contact: res.data.result.contact,
                isLoading: false,
                isError: false,
                error: "",
            };
            dispatch(setUser(updatedUserData));
            Swal.fire({
                icon: "success",
                title: "Updated",
                text: res?.data.message,
            });
            reset();
        } else {
            Swal.fire({
                icon: "error",
                title: res?.error?.data?.message,
                text: res?.error?.data?.error,
            });
        }
    };


    return (
        <Wrapper>
            <form
                action=""
                className="mt-4 update-form"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <div className="input-container">
                    {/* Username */}
                    <div className="">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Username</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-sm rounded-sm input-bordered w-full max-w-xs"
                                defaultValue={user?.username}
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "username is required",
                                    },
                                })}
                            />
                            {errors?.username && (
                                <div className="label">
                                    <span className="label-text-alt text-xs font-medium text-red-600">
                                        {errors?.username?.message}
                                    </span>
                                </div>
                            )}
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
                                defaultValue={user?.email}
                                readOnly
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "email is required",
                                    },
                                })}
                            />
                            {errors?.email && (
                                <div className="label">
                                    <span className="label-text-alt text-xs font-medium text-red-600">
                                        {errors?.email?.message}
                                    </span>
                                </div>
                            )}
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
                                defaultValue={user?.address}
                                {...register("address")}
                            />
                            {errors?.address && (
                                <div className="label">
                                    <span className="label-text-alt text-xs font-medium text-red-600">
                                        {errors?.address?.message}
                                    </span>
                                </div>
                            )}
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
                                defaultValue={user?.contact}
                                {...register("contact")}
                            />
                            {errors?.contact && (
                                <div className="label">
                                    <span className="label-text-alt text-xs font-medium text-red-600">
                                        {errors?.contact?.message}
                                    </span>
                                </div>
                            )}
                        </label>
                    </div>
                </div>
                <div className="submit-btn mt-4">
                    <button className="" type="submit">
                        {isLoading ? "Loading" : "update"}
                    </button>
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
