import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AllJobs from "../Components/AllJobs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>
    },

    {
        path: '/auth',
        element: <AuthLayouts></AuthLayouts>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },

])

export default router;