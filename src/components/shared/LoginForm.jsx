import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { GoogleAuthProvider } from "firebase/auth";
import { registerUser } from "../../redux/features/UserSlice";

const LoginForm = ({ setShowWhichForm }) => {
    const [isShowPassowrd, setIsShowPassword] = useState(false);
    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        dispatch(registerUser(provider));
    };
    return (
        <div className="auth-form-container">
            <h4 className="auth-form-title">Login</h4>
            <form className="auth-form">
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
                <div className="btn-row">
                    <button className="auth-btn">login</button>
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
