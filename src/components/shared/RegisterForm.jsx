import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
const RegisterForm = ({ setShowWhichForm }) => {
    const [isShowPassowrd, setIsShowPassword] = useState(false);
    return (
        <div className="auth-form-container">
            <h4 className="auth-form-title">Create Account</h4>
            <form className="auth-form">
                <div className="input-row">
                    <label htmlFor="email" className="label">
                        Username:
                    </label>
                    <input type="text" className="auth-input" />
                    {/* <p className="error-display">something wrong</p> */}
                </div>
                <div className="input-row">
                    <label htmlFor="email" className="label">
                        enter email:
                    </label>
                    <input type="email" className="auth-input" />
                    {/* <p className="error-display">something wrong</p> */}
                </div>
                <div className="input-row password">
                    <label htmlFor="password" className="label">
                        enter password:
                    </label>
                    <input
                        type={isShowPassowrd ? "text" : "password"}
                        className="auth-input "
                    />
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
                    />
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
                    <button className="auth-btn">register</button>
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
