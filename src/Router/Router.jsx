import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPages/ErrorPage";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Fridge from "../Pages/Fridge";
import ContactUs from "../Pages/ContactUs";
import Login from "../Components/AuthPages/Login";
import SignUp from "../Components/AuthPages/Signup";


export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/fridge',
                Component: Fridge,
            },
            {
                path: '/ContactUs',
                Component: ContactUs,
            },
            {
                path: '/Login',
                Component: Login,
            },
            {
                path: '/Signup',
                Component: SignUp,
            },
        ]
    }
])
