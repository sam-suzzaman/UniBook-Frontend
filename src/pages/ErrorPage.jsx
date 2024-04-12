import React from "react";
import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    if ((error.status = 404)) {
        return (
            <Wrapper>
                <div className="section">
                    <div className="error text-red-600">
                        4<span className="text-red-400">0</span>4
                    </div>
                    <div className="page">
                        Ooops!!! The page you are looking for is not found
                    </div>
                    <Link to="/" className="back-home" href="#!">
                        Back to home
                    </Link>
                </div>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <div className="section">
                <div className="error text-red-600">
                    O<span className="text-red-400">pp</span>s
                </div>
                <div className="page">Something went to wrong</div>
                <Link className="back-home" to="/">
                    back to previous
                </Link>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    /* background-color: #f4f4f4; */
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .section .error {
        font-size: calc(2rem + 4vw);
        font-weight: 700;
        letter-spacing: 4px;
        text-align: center;
    }

    .page {
        font-size: calc(0.7rem + 0.2vw);
        font-weight: 600;
        color: #585858;
        text-align: center;
    }

    .back-home {
        display: inline-block;
        border: 2px solid var(--secondary-clr);
        color: #fff;
        text-transform: capitalize;
        font-weight: 500;
        padding: 6px 20px;
        transition: all 0.2s linear;
        background: var(--secondary-clr);
        border-radius: 6px;
        margin-top: 30px;
        font-size: calc(0.75rem + 0.1vw);
    }
    .back-home:hover {
        background: var(--primary-clr);
        border-color: var(--primary-clr);
    }
`;

export default ErrorPage;
