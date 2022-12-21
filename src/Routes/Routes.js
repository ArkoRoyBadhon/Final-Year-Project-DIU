import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/Errorpage";
import Home from "../components/HomePage/Home";
import InformationPage from "../components/InformationPage/InformationPage";
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
                element: <InformationPage />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    },

])

export default router;