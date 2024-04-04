import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
