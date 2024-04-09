import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FaRegUser } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";

import avatar from "../../assets/avatar.jpeg";

const sidebarData = [
    { id: 1, name: "profile", icon: <FaRegUser />, path: "." },
    {
        id: 2,
        name: "my college",
        icon: <LuSchool />,
        path: "my-college",
    },
];

const DashboardSidebar = () => {
    return (
        <Wrapper>
            <div className="profile px-4 ">
                <img
                    className="w-16 mx-auto rounded-full"
                    src={avatar}
                    alt="avatar"
                />
                <h5 className="font-semibold text-[14px] text-center mt-2 text-ellipsis overflow-hidden">
                    Robert Dowery
                </h5>
                <h6 className="font-semibold text-[12px] text-center text-ellipsis overflow-hidden text-gray-700">
                    demodemodemodemodemo@gmail.com
                </h6>
            </div>
            <div className="d-sidemenu">
                {sidebarData?.map((item) => {
                    return (
                        <NavLink
                            to={item.path}
                            className="d-item"
                            key={item.id}
                            exact={item.exact}
                        >
                            <span className=" mr-[6px] md:mr-2">
                                {item.icon}
                            </span>
                            {item.name}
                        </NavLink>
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    padding: 20px 14px;
    overflow-y: auto;
    .d-sidemenu {
        margin-top: 25px;
    }
    .d-sidemenu .d-item {
        text-transform: capitalize;
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: calc(14px + 0.14vw);
        padding: 3px 12px;
        background-color: rgba(0, 0, 0, 0.06);
        margin-bottom: 8px;
        transition: all 0.3s ease;
        border-radius: 4px;
    }
    .d-sidemenu .d-item:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
    .d-sidemenu .d-item.active {
        font-weight: 600;
        background-color: var(--primary-clr);
        color: #fff;
    }
    @media screen and (max-width: 992px) {
        width: 100%;
        max-width: 220px;
        background-color: #eeeeee;
        height: 100%;
    }
`;
export default DashboardSidebar;
