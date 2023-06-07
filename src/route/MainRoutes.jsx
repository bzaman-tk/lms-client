import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../components/pages/Home"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])

export default routes;