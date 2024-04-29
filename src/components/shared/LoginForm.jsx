import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { GoogleAuthProvider } from "firebase/auth";
import {
    googleLoginThunk,
    userLoginThunk,
} from "../../redux/features/UserSlice";
import { useForm } from "react-hook-form";

const LoginForm = ({ setShowWhichForm }) => {
    const [isShowPassowrd, setIsShowPassword] = useState(false);

    const dispatch = useDispatch();
    const { email } = useSelector((state) => state.userSlice);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        dispatch(googleLoginThunk(provider));
    };

    const handleEmailPassLogin = async (data) => {
        const { email, password } = data;
        const userObject = { email, password };
        dispatch(userLoginThunk({ userObject, reset }));
    };

    useEffect(() => {
        if (email) {
            navigate(from, { replace: true });
        }
    }, [navigate, email]);

    return (
        <div className="auth-form-container">
            <h4 className="auth-form-title">Login</h4>
            <form
                className="auth-form"
                onSubmit={handleSubmit(handleEmailPassLogin)}
                autoComplete="off"
            >
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
                <div className="btn-row">
                    <button className="auth-btn" type="submit">
                        {/* {isLoading ? "loading..." : "login"} */}
                        login
                    </button>
                </div>
            </form>
            <div className="forget-pass-row">
                <Link className="forget-link" to="/">
                    forget password?
                </Link>
            </div>
            <p className="account-info">
                Don't have an account ?
                <span
                    onClick={() => setShowWhichForm("register")}
                    className="control-form-btn"
                >
                    create account
                </span>
            </p>

            <div className="divider text-xs">OR</div>

            {/* Social login */}
            <div className="social-auth-container">
                <button className="auth-btn" onClick={handleGoogleLogin}>
                    <FaGoogle />
                </button>
                <button className="auth-btn">
                    <FaFacebook />
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
