import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm, RegisterForm } from "../components";

const AuthenticationPage = () => {
    const [showWhichForm, setShowWhichForm] = useState("login");
    return (
        <Wrapper>
            {showWhichForm === "login" ? (
                <LoginForm setShowWhichForm={setShowWhichForm} />
            ) : (
                <RegisterForm setShowWhichForm={setShowWhichForm} />
            )}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    position: relative;
    min-height: 100vh;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .auth-form-container {
        position: relative;
        width: 100%;
        max-width: 400px;
        background: #fff;
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 40px;
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
        margin-top: 25px;
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
        padding: 4px 20px;
        border-radius: 4px;
        transition: background-color 0.3s linear;
    }
    .auth-form .btn-row .auth-btn:hover {
        background-color: var(--primary-clr);
    }

    .forget-pass-row .forget-link {
        width: 100%;
        display: block;
        font-size: 13px;
        font-weight: 600;
        text-align: center;
        text-transform: capitalize;
        color: #c40404;
        margin-top: 12px;
        text-decoration: underline;
    }

    .account-info {
        font-size: 13px;
        text-align: center;
        margin-top: 10px;
    }
    .account-info .control-form-btn {
        margin-left: 2px;
        color: var(--secondary-clr);
        text-transform: capitalize;
        font-weight: 600;
        transition: text-decoration 0.2s linear;
    }
    .account-info .control-form-btn:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    .social-auth-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .social-auth-container .auth-btn {
        font-size: 18px;
        font-weight: 500;
        background-color: var(--primary-clr);
        color: white;
        padding: 10px 10px;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }
    .social-auth-container .auth-btn:hover {
        background-color: var(--secondary-clr);
    }
`;

export default AuthenticationPage;
