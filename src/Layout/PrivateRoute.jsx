import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser, toggleLoading } from "../redux/features/UserSlice";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { isLoading, email } = useSelector((state) => state.userSlice);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     onAuthStateChanged(firebaseAuth, (user) => {
    //         if (user) {
    //             dispatch(
    //                 setUser({
    //                     username: user.displayName,
    //                     email: user.email,
    //                 })
    //             );
    //             dispatch(toggleLoading({ isLoading: false }));
    //         } else {
    //             dispatch(toggleLoading({ isLoading: false }));
    //         }
    //     });
    // }, []);

    // if (isLoading) {
    //     return <h1>loading....</h1>;
    // }

    // if (!isLoading && !email) {
    //     return <Navigate to="/auth" state={{ from: location }} replace />;
    //     // return <Navigate to="/auth" state={{ path: pathname }} />;
    // }
    if (!email) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
        // return <Navigate to="/auth" state={{ path: pathname }} />;
    }

    return children;
};

export default PrivateRoute;
