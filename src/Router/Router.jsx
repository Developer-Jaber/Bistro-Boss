import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import OurMenu from "../Pages/OurMenu";
import Order from "../Pages/Order";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/our-menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/order',
                element: <Order></Order>
            }
        ]
    }
])

const Router = () => {
    return <RouterProvider router={router}></RouterProvider>
};

export default Router;