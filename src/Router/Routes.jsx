import { createBrowserRouter } from "react-router-dom";

// import layout
import MainLayout from "../Layout/Main";
import DashobardLayout from "../Layout/DashboardLayout";

// importing pages
import {
    HomePage,
    AboutPage,
    AuthenticationPage,
    SingleCollegePage,
    CollegePage,
    AdmissionPage,
    ProfilePage,
    MyCollegePage,
    PasswordResetPage,
    ErrorPage,
} from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                // path: "/",
                index: true,
                element: <HomePage />,
            },
            {
                path: "college",
                element: <CollegePage />,
            },
            {
                path: "college/:id",
                element: <SingleCollegePage />,
            },
            {
                path: "admission",
                element: <AdmissionPage />,
            },
            {
                path: "dashboard",
                element: <DashobardLayout />,
                children: [
                    { index: true, element: <ProfilePage /> },
                    {
                        path: "my-college",
                        element: <MyCollegePage />,
                    },
                ],
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "auth",
                element: <AuthenticationPage />,
            },
            {
                path: "reset",
                element: <PasswordResetPage />,
            },
        ],
    },
]);

export default router;
