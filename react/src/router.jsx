import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";

const router =createBrowserRouter(routes[
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/signup',
        element: <Signup/>
    },
    {
        path:'/users',
        element: <Users/>
    }

]);
export default router;