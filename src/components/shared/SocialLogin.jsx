import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [error, setError] = useState({})
    const { googleLogin } = useAuth();
    const navigate = useNavigate()
    const hanldeGoogleLogin = () => {
        setError({})
        googleLogin()
            .then(result => {
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ name: result.user.displayName, email: result.user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        //if (data.insertedId) {
                        navigate('/')
                        // }
                    })
            })
            .catch(e => {
                setError({ type: 'google', message: e.message })
            })
    }
    return (
        <>
            <button onClick={hanldeGoogleLogin} className="btn btn-circle mx-auto">
                <FaGoogle />
            </button>
            {(error && error.type === 'google') && <span className="text-red-600 my-3">{error.message}</span>}
        </>
    );
};

export default SocialLogin;