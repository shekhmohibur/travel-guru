import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Hero from "../components/HomeLayout/Hero";
import Booking from "../components/Booking";
import BookApplyCard from "../components/BookApplyCard";

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
        element:<h1>AuthLayout</h1>,
        children:[
            {
                path:'/auth/login',
                element:<h2>login</h2>,
            },
            {
                path:'/auth/register',
                element:<h2>register</h2>,
            },
        ]
    },
    {
        path:'/*',
        element:<p>error 404</p>
    }
])
export default Router;