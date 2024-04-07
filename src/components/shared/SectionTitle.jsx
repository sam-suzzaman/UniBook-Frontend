import React from "react";
import styled from "styled-components";

const SectionTitle = ({ title, clr }) => {
    if (clr) {
        return (
            <Wrapper>
                <h2 className="sec-title alt-txt-clr">{title}</h2>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <h2 className="sec-title">{title}</h2>
            </Wrapper>
        );
    }
};

const Wrapper = styled.div`
    .sec-title {
        font-size: calc(1rem + 0.8vw);
        font-weight: 700;
        text-transform: capitalize;
        text-align: center;
        position: relative;
        margin-bottom: 30px;
        background: linear-gradient(
            90deg,
            var(--primary-clr),
            var(--accent-clr)
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .sec-title::after {
        content: "";
        position: absolute;
        bottom: -7px;
        left: 50%;
        width: calc(30px + 1.7vw);
        height: 3px;
        border-radius: 2px;
        background-image: linear-gradient(
            to right,
            var(--accent-clr),
            var(--secondary-clr)
        );
    }
    .sec-title.alt-txt-clr {
        background: linear-gradient(
            90deg,
            var(--neutral-clr),
            var(--neutral-clr)
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
export default SectionTitle;
