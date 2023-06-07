import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';

const SocialLogin = () => {
    const [error, setError] = useState({})
    const { googleLogin } = useAuth();
    const hanldeGoogleLogin = () => {
        setError({})
        googleLogin()
            .then()
            .catch(e => {
                setError({ type: 'google', message: e.message })
            })
    }
    return (
        <>
            <button onClick={hanldeGoogleLogin} className="btn">G</button>
            {(error && error.type === 'google') && <span className="text-red-600 my-3">{error.message}</span>}
        </>
    );
};

export default SocialLogin;