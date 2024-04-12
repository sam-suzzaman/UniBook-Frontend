import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navbar } from "../components";

const MainLayout = () => {
    const location = useLocation();
    const isAuthRoute = location.pathname === "/auth";
    const isResetRoute = location.pathname === "/reset";
    const isDashboardRoute = location.pathname.includes("/dashboard");

    if (isAuthRoute || isDashboardRoute || isResetRoute) {
        return (
            <div>
                <Outlet />
            </div>
        );
    } else {
        return (
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        );
    }
};

export default MainLayout;
