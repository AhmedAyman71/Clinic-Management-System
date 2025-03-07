import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
// import Login from "../pages/Auth/login";
// import Register from "../pages/Auth/Register";

import App from "../App";
import PageNotFound from "../pages/errors/pageNotFound";
import Loginn from "../pages/Auth/login";
import Signup from "../pages/Auth/Signup";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace />,
    },
    {
        path: "/login",
        element: <Loginn />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/home",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound />,
    }
]);
