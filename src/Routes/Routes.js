import { createBrowserRouter } from "react-router-dom";
import Home from "../components/HomePage/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home /> 
    }
])

export default router;