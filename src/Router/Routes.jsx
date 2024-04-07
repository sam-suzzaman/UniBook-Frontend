import { createBrowserRouter } from "react-router-dom";

// import layout
import MainLayout from "../Layout/Main";

// importing pages
import {
    HomePage,
    AboutPage,
    AuthenticationPage,
    SingleCollegePage,
    CollegePage,
    AdmissionPage,
} from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                // path: "/",
                index: true,
                element: <HomePage />,
            },
            {
                path: "/college",
                element: <CollegePage />,
            },
            {
                path: "/college/:id",
                element: <SingleCollegePage />,
            },
            {
                path: "/admission",
                element: <AdmissionPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/auth",
                element: <AuthenticationPage />,
            },
        ],
    },
]);

export default router;
