import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../components/pages/Home"
import ErrorPage from "../components/pages/ErrorPage";
import Register from "../components/pages/accounts/Register";
import Login from "../components/pages/accounts/Login";
import Instructors from "../components/pages/Instructors";
import Classes from "../components/pages/Classes";
import Dashboard from "../layouts/Dashboard";
import Account from "../components/pages/accounts/Account";
import ManageClassess from "../components/pages/accounts/ManageClassess";
import Feedback from "../components/pages/accounts/Feedback";
import ManageUsers from "../components/pages/accounts/ManageUsers";

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
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Account />
            },
            {
                path: 'classes',
                element: <ManageClassess />
            },
            {
                path: 'feedback/:id',
                element: <Feedback />,
                loader: ({ params }) => fetch(`http://localhost:5000/feedback/${params.id}`)
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            },
            {
                path: 'add-class',
                element: <div>add class</div>
            },
            {
                path: 'my-classes',
                element: <div>my class</div>
            }
        ]
    }

])

export default routes;