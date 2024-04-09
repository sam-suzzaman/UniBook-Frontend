import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { DashboardNavbar, DashboardSidebar } from "../components";

const DashobardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Wrapper>
            <DashboardNavbar toggleSidebar={toggleSidebar} />
            <div className="dashboard">
                <div
                    className={`d-sidebar ${isSidebarOpen ? "show" : ""}`}
                    onClick={toggleSidebar}
                >
                    <DashboardSidebar />
                </div>
                <div className="d-content">
                    <Outlet />
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .dashboard {
        width: 100%;
        height: calc(100vh - 60px);
        display: grid;
        grid-template-columns: minmax(auto, 220px) 1fr;
    }

    /* Sidebar display container */
    .dashboard .d-sidebar {
        height: 100%;
        background-color: #eeeeee;
        overflow-y: auto;
    }
    /* Content display Container */
    .dashboard .d-content {
        width: 100%;
        height: 100%;
        padding: 1rem 1rem;
        overflow-y: auto;
    }
    @media screen and (max-width: 992px) {
        .dashboard {
            display: block;
            position: relative;
        }
        /* Sidebar display container */
        .dashboard .d-sidebar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: 1;
            transform: translateX(-100%);
            transition: all 0.3s ease-in-out;
        }
        .dashboard .d-sidebar.show {
            transform: translateX(0);
        }
    }
`;

export default DashobardLayout;
