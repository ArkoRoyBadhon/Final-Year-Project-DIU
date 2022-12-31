import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../components/AboutPage/AboutPage";
import AddProduct from "../components/DashBoard/AddProduct";
import AllUsers from "../components/DashBoard/AllUsers";
import AllBuyers from "../components/DashBoard/AllUsers";
import DashBoard from "../components/DashBoard/DashBoard";
import ErrorPage from "../components/ErrorPage/Errorpage";
import Home from "../components/HomePage/Home";
import InformationPage from "../components/InformationPage/InformationPage";
import Login from "../components/LoginPage/Login";
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
                path: '/dashboard',
                element: <PrivateAdmin><DashBoard /></PrivateAdmin>,
                children: [
                    {
                        path: "/dashboard",
                        element: <AllUsers />
                    },
                    {
                        path: "/dashboard/addProduct",
                        element: <AddProduct />
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