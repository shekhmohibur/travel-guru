import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Hero from "../components/HomeLayout/Hero";
import Booking from "../components/Booking";
import BookApplyCard from "../components/BookApplyCard";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        children:[
            {
                path:'/home',
                element:<Home/>,
            },
            {
                path:'',
                element:<Hero />,
                loader:() => fetch('/places.json'),
            },
            {
                path:'/place/:id',
                element:<Booking/>,
                loader:() => fetch('/places.json'),
            },
        ]
    },
    {
        path:'/auth/',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>,
            },
            {
                path:'/auth/register',
                element:<Register/>,
            },
        ]
    },
    {
        path:'/*',
        element:<p>error 404</p>
    }
])
export default Router;