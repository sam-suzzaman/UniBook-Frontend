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
    SearchResultPage,
} from "../pages";
import PrivateRoute from "../Layout/PrivateRoute";
import Demo from "../pages/Demo";

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
                path: "search",
                element: <SearchResultPage />,
            },
            {
                path: "college/:id",
                element: (
                    <PrivateRoute>
                        <SingleCollegePage />
                    </PrivateRoute>
                ),
            },
            {
                path: "admission",
                element: <AdmissionPage />,
            },
            {
                path: "demo",
                element: <Demo />,
            },
            {
                path: "dashboard",
                element: (
                    <PrivateRoute>
                        <DashobardLayout />
                    </PrivateRoute>
                ),
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
