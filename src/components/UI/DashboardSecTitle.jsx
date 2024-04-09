import React from "react";
import styled from "styled-components";

const DashboardSecTitle = ({ title }) => {
    return (
        <Wrapper>
            <div class="d-sec-title">
                <h2 className="d-title">{title}</h2>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .d-sec-title {
        text-align: center;
        padding-bottom: 30px;
    }

    .d-title {
        font-size: calc(18px + 1vw);
        font-weight: 600;
        text-transform: capitalize;
        padding-bottom: 10px;
        position: relative;
        color: var(--secondary-clr);
    }

    .d-title::before {
        content: "";
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: var(--secondary-clr);
        bottom: 1px;
        left: calc(50% - 60px);
    }
    .d-title::after {
        content: "";
        position: absolute;
        display: block;
        width: 40px;
        height: 4px;
        background: var(--secondary-clr);
        bottom: 0;
        left: calc(50% - 20px);
    }
`;
export default DashboardSecTitle;
