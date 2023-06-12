import { Navigate, useLocation } from "react-router";
import useAuth from "../hook/useAuth";
import useInstractor from "../hook/useInstractor";

const InstractorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstractor, isLoading] = useInstractor();
    const location = useLocation();

    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstractor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstractorRoute;