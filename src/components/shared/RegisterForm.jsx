import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { userRegistrationThunk } from "../../redux/features/UserSlice";

const RegisterForm = ({ setShowWhichForm }) => {
    const [isShowPassowrd, setIsShowPassword] = useState(false);

    const { email, isLoading } = useSelector((state) => state.userSlice);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        const { username, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Both password not matched",
            });
        } else {
            const userObject = { username, email, password };
            dispatch(userRegistrationThunk({ userObject, reset }));
        }
    };

    useEffect(() => {
        if (email) {
            navigate(from, { replace: true });
        }
    }, [navigate, email]);

    return (
        <div className="auth-form-container">
            <h4 className="auth-form-title">Create Account</h4>
            <form
                className="auth-form"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <div className="input-row">
                    <label htmlFor="email" className="label">
                        Username:
                    </label>
                    <input
                        type="text"
                        className="auth-input"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "username required",
                            },
                            minLength: {
                                value: 3,
                                message: "too short username (min 3char)",
                            },
                            maxLength: {
                                value: 20,
                                message: "too long username (max 20char)",
                            },
                        })}
                    />
                    {errors?.username && (
                        <p className="error-display">
                            {errors?.username?.message}
                        </p>
                    )}
                    {/* <p className="error-display">something wrong</p> */}
                </div>
                <div className="input-row">
                    <label htmlFor="email" className="label">
                        enter email:
                    </label>
                    <input
                        type="email"
                        className="auth-input"
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
                <div className="input-row password">
                    <label htmlFor="password" className="label">
                        enter password:
                    </label>
                    <input
                        type={isShowPassowrd ? "text" : "password"}
                        className="auth-input "
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            maxLength: {
                                value: 20,
                                message: "Password is too long(max 20char)",
                            },
                            minLength: {
                                value: 6,
                                message: "Password is too short (min 6char)",
                            },
                            // pattern: {
                            //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/,
                            //     message:
                            //         "At least one uppercase,one special char and one number",
                            // },
                        })}
                    />
                    {errors?.password && (
                        <p className="error-display">
                            {errors?.password?.message}
                        </p>
                    )}
                    {/* <p className="error-display">something wrong</p> */}
                    <div
                        className="eyes"
                        onClick={() => setIsShowPassword(!isShowPassowrd)}
                    >
                        {isShowPassowrd ? (
                            <IoEyeOutline className="eye" />
                        ) : (
                            <IoEyeOffOutline className="eye" />
                        )}
                    </div>
                </div>
                <div className="input-row password">
                    <label htmlFor="password" className="label">
                        Confirm password:
                    </label>
                    <input
                        type={isShowPassowrd ? "text" : "password"}
                        className="auth-input "
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                            maxLength: {
                                value: 20,
                                message: "Password is too long(max 20char)",
                            },
                            minLength: {
                                value: 6,
                                message: "Password is too short (min 6char)",
                            },
                            // pattern: {
                            //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/,
                            //     message:
                            //         "At least one uppercase,one special char and one number",
                            // },
                        })}
                    />
                    {errors?.confirmPassword && (
                        <p className="error-display">
                            {errors?.confirmPassword?.message}
                        </p>
                    )}
                    {/* <p className="error-display">something wrong</p> */}
                    <div
                        className="eyes"
                        onClick={() => setIsShowPassword(!isShowPassowrd)}
                    >
                        {isShowPassowrd ? (
                            <IoEyeOutline className="eye" />
                        ) : (
                            <IoEyeOffOutline className="eye" />
                        )}
                    </div>
                </div>
                <div className="btn-row">
                    <button className="auth-btn" type="submit">
                        register
                    </button>
                </div>
            </form>
            <p className="account-info">
                Already have an account ?
                <span
                    onClick={() => setShowWhichForm("login")}
                    className="control-form-btn"
                >
                    login now
                </span>
            </p>
        </div>
    );
};

export default RegisterForm;
