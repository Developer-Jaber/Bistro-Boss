import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";

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
                path:'/about',
                element:<h1>about me</h1>
            }
        ]
    }
])

const Router = () => {
    return <RouterProvider router={router}></RouterProvider>
};

export default Router;