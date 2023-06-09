import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const Feedback = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ message: data.message })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('feedback sent')
                    navigate('/dashboard/classes')
                }
            })
    };
    if (!data.feedback) {
        return (
            <form onSubmit={handleSubmit(onSubmit)} className='container max-w-3xl border rounded-lg px-8 text-center pb-10 my-8 mx-auto'>
                <h1 className="text-2xl font-bold uppercase text-center my-5">add feedback</h1>
                <textarea name="message" id="message" cols="50" rows="5"
                    {...register("message", { required: true })}
                    placeholder='Your Feedback Here'
                    className='border px-5 py-2'
                ></textarea>
                {errors.message && <span className='block text-red-600'>This field is required</span>}

                <input className='btn block mx-auto mt-5' value='Send Feedback' type="submit" />
            </form>
        )
    }

    return (
        <div className='container mx-auto'>
            <h1 className="text-3xl">flasdjflak;fja</h1>
        </div>
    );
};

export default Feedback;