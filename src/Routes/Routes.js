import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../components/AboutPage/AboutPage";
import Blog from "../components/Blog/Blog";
import Cart from "../components/Cart/Cart";
import AddEmployee from "../components/DashBoard/AddEmployee";
import AddProduct from "../components/DashBoard/AddProduct";
import AllUsers from "../components/DashBoard/AllUsers";
import AllBuyers from "../components/DashBoard/AllUsers";
import DashBoard from "../components/DashBoard/DashBoard";
import MakeAdmin from "../components/DashBoard/MakeAdmin";
import ShowProduct from "../components/DashBoard/ShowProduct";
import ViewEmployee from "../components/DashBoard/ViewEmployee";
import ErrorPage from "../components/ErrorPage/Errorpage";
import Home from "../components/HomePage/Home";
import InformationPage from "../components/InformationPage/InformationPage";
import Login from "../components/LoginPage/Login";
import Predict from "../components/PredictPage/Predict";
import Register from "../components/Register/Register";
import PrivateAdmin from "../components/Shared/PrivateAdmin";
import PrivatePage from "../components/Shared/PrivatePage";
import ShopMain from "../components/Shop/ShopMain";
import Main from "../layouts/MainLayout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/information',
                element: <PrivatePage><InformationPage /></PrivatePage>
            },
            {
                path: '/about',
                element: <AboutPage /> 
            },
            {
                path: '/blog',
                element: <Blog /> 
            },
            {
                path: '/shop',
                element: <ShopMain />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },            
            {
                path: '/predict',
                element: <Predict />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/dashboard',
                element: <PrivateAdmin><DashBoard /></PrivateAdmin>,
                children: [
                    {
                        path: "/dashboard/makeadmin",
                        element: <AllUsers />
                    },
                    {
                        path: "/dashboard/addProduct",
                        element: <AddProduct />
                    },
                    {
                        path: "/dashboard/showproduct",
                        element: <ShowProduct />
                    },
                    // {
                    //     path: "/dashboard/makeadmin",
                    //     element: <MakeAdmin />
                    // },
                    {
                        path: "/dashboard/makeadmin",
                        element: <MakeAdmin />
                    },
                    {
                        path: "/dashboard/addemployee",
                        element: <AddEmployee />
                    },
                    {
                        path: "/dashboard/viewemployee",
                        element: <ViewEmployee />
                    }
                ]
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    },

])

export default router;