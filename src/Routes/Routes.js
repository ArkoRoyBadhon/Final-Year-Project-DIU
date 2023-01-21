import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../components/AboutPage/AboutPage";
import Blog from "../components/Blog/Blog";
import Cart from "../components/Cart/Cart";
import AddEmployee from "../components/DashBoard/AddEmployee";
import AddProduct from "../components/DashBoard/AddProduct";
import AllOrders from "../components/DashBoard/AllOrders";
import AllUsers from "../components/DashBoard/AllUsers";
import BookedmarkItems from "../components/DashBoard/BookedmarkItems";
import DashBoard from "../components/DashBoard/DashBoard";
import EditProduct from "../components/DashBoard/EditProduct";
import ManageAdmin from "../components/DashBoard/ManageAdmin";
import MyOrders from "../components/DashBoard/MyOrders";
import MyProductOrders from "../components/DashBoard/MyProductOrders";
import MyProfile from "../components/DashBoard/MyProfile";
import ShowProduct from "../components/DashBoard/ShowProduct";
import ViewEmployee from "../components/DashBoard/ViewEmployee";
import ErrorPage from "../components/ErrorPage/Errorpage";
import Home from "../components/HomePage/Home";
import InformationPage from "../components/InformationPage/InformationPage";
import Login from "../components/LoginPage/Login";
import Predict from "../components/PredictPage/Predict";
import Register from "../components/Register/Register";
import PrivatePage from "../components/Shared/PrivatePage";
import ShopMain from "../components/Shop/ShopMain";
import ViewProduct from "../components/ViewProduct/ViewProduct";
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
                path: 'shop/viewproduct/:id',
                element: <ViewProduct />
            },
            {
                path: '/dashboard',
                element: <PrivatePage><DashBoard /></PrivatePage>,
                children: [
                    {
                        path: "/dashboard/allusers",
                        element: <AllUsers />
                    },
                    {
                        path: "/dashboard/viewproduct/:id",
                        element: <ViewProduct />
                    },
                    {
                        path: "/dashboard/addproduct",
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
                        path: "/dashboard/manageadmin",
                        element: <ManageAdmin />
                    },
                    {
                        path: "/dashboard/addemployee",
                        element: <AddEmployee />
                    },
                    {
                        path: "/dashboard/bookedmarkitems",
                        element: <BookedmarkItems />
                    },
                    {
                        path: "/dashboard/viewemployee",
                        element: <ViewEmployee />
                    },
                    {
                        path: "/dashboard/myprofile",
                        element: <MyProfile />
                    },
                    {
                        path: "/dashboard/myorders",
                        element: <MyOrders />
                    },
                    {
                        path: "/dashboard/allorders",
                        element: <AllOrders />
                    },
                    {
                        path: "/dashboard/editproduct/:id",
                        element: <EditProduct />
                    },
                    {
                        path: "/dashboard/myproductorders",
                        element: <MyProductOrders />
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