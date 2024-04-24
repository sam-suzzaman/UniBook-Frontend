import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import firebaseAuth from "../firebase-init";
import { setUser, toggleLoading } from "../redux/features/UserSlice";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const isLoading = false;
    let email = true;
    // const { isLoading, email } = useSelector((state) => state.userSlice);
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

    useEffect(() => {
        // if (isCookieExists("uniBookAuthCookie")) {
        //     console.log("Cookie exists");
        //     // do cookie exists stuff
        // } else {
        //     console.log("Cookie does not exist");
        //     // do cookie doesn't exist stuff;
        // }
    }, []);

    if (isLoading) {
        return <h1>loading....</h1>;
    }

    if (!isLoading && !email) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
        // return <Navigate to="/auth" state={{ path: pathname }} />;
    }

    return children;
};

export default PrivateRoute;
