import React, { useState } from "react";
import styled from "styled-components";

import {
    BasicInfoTable,
    DashboardSecTitle,
    UpdateInfoForm,
} from "../components";
import avatar from "../assets/avatar.jpeg";

import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const [isEdit, setIsEdit] = useState(false);
    const user = useSelector((state) => state.userSlice);

    return (
        <Wrapper>
            <div className="">
                <DashboardSecTitle title="My Profile" />
            </div>
            <div className="profile-sec-container">
                <div className="first-col">
                    <img src={avatar} alt="avatar" />

                    <div className="control flex flex-col justify-center items-center mt-[10px]">
                        <h5 className="capitalize overflow-hidden text-ellipsis font-bold text-[14px] text-primary">
                            {user?.username || "Unknown"}
                        </h5>
                        <Link
                            to={`/reset`}
                            className="flex items-center mt-[3px]"
                        >
                            <GrPowerReset className="text-[13px]" />
                            <span className="text-[12px] capitalize ml-1 font-semibold ">
                                Reset Password
                            </span>
                        </Link>
                    </div>

                    {/* {!isEdit && (
                        <div className="control flex flex-col justify-center items-center mt-4">
                            <Link
                                to={`/dashboard/student/profile/${1}`}
                                className="flex items-center"
                            >
                                <FiEdit />{" "}
                                <span className="text-[13px] capitalize ml-1 font-medium ">
                                    edit
                                </span>
                            </Link>
                            <Link
                                to={`/dashboard/student/reset/${1}`}
                                className="flex items-center mt-2"
                            >
                                <GrPowerReset />
                                <span className="text-[13px] capitalize ml-1 font-medium ">
                                    Reset Password
                                </span>
                            </Link>
                        </div>
                    )} */}
                </div>

                <div className="second-col">
                    <div className="sub-row-1">
                        <div className="flex justify-between items-center">
                            <h5 className="sec-title">
                                {isEdit ? "Update Info" : "Information"}
                            </h5>
                            {!isEdit && (
                                <div
                                    className="flex items-center cursor-pointer"
                                    onClick={() => setIsEdit(!isEdit)}
                                >
                                    <FiEdit />
                                    <span className="text-[13px] capitalize ml-1 font-medium ">
                                        edit
                                    </span>
                                </div>
                            )}
                        </div>
                        {isEdit ? (
                            <UpdateInfoForm setIsEdit={setIsEdit} user={user} />
                        ) : (
                            <BasicInfoTable user={user} />
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    .profile-sec-container {
        margin-top: 30px;
        display: grid;
        grid-template-columns: minmax(auto, 200px) 1fr;
        grid-gap: 20px;
        padding: 2.5rem 2rem;
        border-radius: 6px;
        background: #ffffff;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.045),
            -3px -3px 6px rgba(0, 0, 0, 0.04);
        /* border: 2px solid
            linear-gradient(to right, var(--primary-clr), var(--secondary-clr)); */
    }

    @media screen and (max-width: 714px) {
        .profile-sec-container {
            display: flex;
            flex-direction: column;
            padding: 1rem;
        }
        .profile-sec-container .first-col {
            margin-bottom: 20px;
        }
    }

    .profile-sec-container .first-col > img {
        width: 100%;
        max-width: 150px;
        margin: 0 auto;
    }
    .profile-sec-container .second-col .sec-title {
        font-weight: 600;
        font-size: calc(16px + 0.3vw);
        opacity: 0.85;
        color: var(--primary-clr);
    }
    .profile-table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        margin-top: calc(12px + 0.2vw);
    }

    .profile-table .info {
        width: 200px;
    }
    .profile-table .value {
        width: calc(100% - 200px);
    }

    .profile-table th.row,
    .profile-table td {
        text-align: left;
        padding: 8px;
    }

    .profile-table td {
        font-size: calc(13px + 0.15vw);
        font-weight: 500;
        text-transform: capitalize;
        color: #00000097;
        margin-bottom: 20px;
    }
    .profile-table td.value {
        color: #000000f2;
        font-weight: 400;
    }
    .profile-table td.text-normal {
        text-transform: none;
    }
    .profile-table .tt-none {
        text-transform: none;
    }
`;
export default ProfilePage;
