import { createBrowserRouter } from "react-router";
import ErrorPage from "../Components/ErrorPages/ErrorPage";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Fridge from "../Pages/Fridge";
import ContactUs from "../Pages/ContactUs";
import Login from "../Components/AuthPages/Login";
import SignUp from "../Components/AuthPages/Signup";
import MyItems from "../Pages/MyItems";
import AddFood from "../Pages/AddFood";


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
                loader: async () => {
                    const res = await fetch('http://localhost:3000/fridge');
                    return res.json();
                },
                hydrateFallbackElement: <h1>Loading...</h1>,

            },
            {
                path: '/MyItems',
                Component: MyItems,
            },
            {
                path: '/AddFood',
                Component: AddFood,
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
