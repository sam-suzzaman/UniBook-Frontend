import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navbar } from "../components";

const MainLayout = () => {
    const location = useLocation();
    const isAuthRoute = location.pathname === "/auth";
    return (
        <div>
            {!isAuthRoute && <Navbar />}
            <Outlet />
            {!isAuthRoute && <Footer />}
        </div>
    );
};

export default MainLayout;
