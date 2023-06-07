import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import SocialLogin from '../../shared/SocialLogin';

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError({})
        if (data.password !== data.cpassword) {
            setError({ type: 'repass', message: 'password did not matched' })
            return;
        }
        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(e => {
                        setError({ type: 'singup', message: e.message })
                    })
            })
            .catch(e => {
                setError({ type: 'singup', message: e.message })
            })
        console.log(data)
    };

    // console.log(watch('cpassword'));

    return (
        <div className="hero min-h-[500px] bg-gray-100 py-10">
            <div className="hero-content flex-col w-full">
                <h1 className="text-3xl font-bold pb-5">Please Register now!</h1>
                <div className="card shadow-2xl bg-base-100 w-full max-w-md">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    placeholder="password" className="input input-bordered" />
                                {
                                    (errors?.password?.type === 'minLength') && <span className='block text-red-600 mt-3'>Password minmum length 6</span>
                                }
                                {
                                    (errors?.password?.type === 'pattern') && <span className='block text-red-600 mt-3'>
                                        a Number, One Uppercase, One Lowercase, a Special Carecter,
                                    </span>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"
                                    {...register("cpassword", { required: true })}
                                    placeholder="password" className="input input-bordered" />
                                {
                                    (error && error?.type === 'repass') && <span className="text-red-600 mt-3">
                                        {error?.message}
                                    </span>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url"
                                    {...register("photo", { required: true })}
                                    placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" value='Login' type="submit" />
                            </div>
                            <p className='text-red-500'>
                                {
                                    (errors.name || errors.email) && <span className='mt-3 block'>This field is required
                                        {console.log(errors.password)}
                                    </span>
                                }
                                {
                                    (error && error?.type === 'singup') && <span className="block mt-3">
                                        {error?.message}
                                    </span>
                                }
                            </p>
                            <p className='mt-3 text-center'>Already have Registered? <Link className='text-blue-500' to='/login'>Login</Link></p>
                        </form>
                        <div className="divider">Or</div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;