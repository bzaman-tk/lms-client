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
import MyClasses from "../components/pages/accounts/MyClasses";
import AddClass from "../components/pages/accounts/AddClass";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "../components/payment/Payment";
import History from "../components/payment/History";
import AdminRoute from "./AdminRoute";
import InstractorRoute from "./InstractorRoute";
import MySelectedClasses from "../components/pages/accounts/MySelectedClasses";
import MyEnrolledClasses from "../components/pages/accounts/MyEnrolledClasses";

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
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Account />
            },
            {
                path: 'classes',
                element: <AdminRoute><ManageClassess /></AdminRoute>
            },
            {
                path: 'feedback/:id',
                element: <Feedback />,
                loader: ({ params }) => fetch(`https://summer-camp-server-liard.vercel.app/feedback/${params.id}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('access-token')}`,
                    }
                })
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: 'add-class',
                element: <InstractorRoute><AddClass /></InstractorRoute>
            },
            {
                path: 'my-classes',
                element: <InstractorRoute><MyClasses /></InstractorRoute>
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'history',
                element: <History />
            },
            {
                path: 'my-enrolled',
                element: <MyEnrolledClasses />
            },
            {
                path: 'my-selected',
                element: <MySelectedClasses />
            }
        ]
    }

])

export default routes;