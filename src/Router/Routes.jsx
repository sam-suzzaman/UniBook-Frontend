import { createBrowserRouter } from "react-router-dom";

// import layout
import MainLayout from "../Layout/Main";

// importing pages
import { HomePage, AboutPage, AuthenticationPage } from "../pages";

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
