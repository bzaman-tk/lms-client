import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../shared/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../../hook/useAuth';

const Login = () => {
    const [show, setShow] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { signIn } = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError('')
        signIn(data.email, data.password)
            .then(result => {
                navigate('/dashboard')
            })
            .catch(e => setError(e.message))
    };

    return (
        <div className="hero min-h-[500px] bg-gray-100 py-12 dark:bg-gray-700">
            <div className="hero-content flex-col w-full">
                <h1 className="text-3xl font-bold pb-5 dark:text-gray-300">Please Login now!</h1>
                <div className="card shadow-2xl bg-base-100 w-full max-w-md">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'password' : 'text'}
                                    {...register("password", { required: true })}
                                    placeholder="password" className="input input-bordered" />
                                <div onClick={() => setShow(!show)} className='absolute bottom-3 right-4 pb-1'>
                                    {
                                        show ? <FaEye /> :
                                            <FaEyeSlash />
                                    }
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" value='Login' type="submit" />
                            </div>
                            <p className='text-red-500'>
                                {
                                    (errors.email || errors.password) && <span>This field is required</span>
                                }
                                {error}
                            </p>
                            <p className='mt-3 text-center'>Don't have an ID? <Link className='text-blue-500' to='/register'>Register</Link></p>
                        </form>
                        <div className="divider">Or</div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;