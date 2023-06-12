import React from 'react';
import useAuth from '../hook/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div className="h-screen w-1/2 mx-auto text-center flex justify-center items-center">
                {/* <button className="btn btn-wide">
                    <span className="loading loading-spinner"></span>
                    loading
                </button> */}
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if (!user) {
        return <Navigate to='/login' />
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoutes;