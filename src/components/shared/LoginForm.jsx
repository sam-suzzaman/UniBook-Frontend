import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const LoginForm = ({ setShowWhichForm }) => {
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
                <div className="input-row">
                    <label htmlFor="email" className="label">
                        enter password:
                    </label>
                    <input type="email" className="auth-input" />
                    {/* <p className="error-display">something wrong</p> */}
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
                <span className="control-form-btn">create account</span>
            </p>

            <div className="divider text-xs">OR</div>

            {/* Social login */}
            <div className="social-auth-container">
                <button className="auth-btn">
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
