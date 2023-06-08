import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../components/pages/Home"
import ErrorPage from "../components/pages/ErrorPage";
import Register from "../components/pages/accounts/Register";
import Login from "../components/pages/accounts/Login";
import Instructors from "../components/pages/Instructors";
import Classes from "../components/pages/Classes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: '/classes',
                element: <Classes />
            }
        ]
    }
])

export default routes;