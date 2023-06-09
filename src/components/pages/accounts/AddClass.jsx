import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hook/useAuth';

const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const imgHost = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_hosting_key}`
    const onSubmit = data => {
        data.instractorEmail = user?.email
        data.instractorName = user?.displayName
        const formData = new FormData()
        formData.append('image', data.photo[0])
        fetch(imgHost, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(img => {
                if (img.success) {
                    data.photo = img.data.display_url
                    console.log(data);
                    fetch(`http://localhost:5000/add-class`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                }
            })
        // console.log(data.photo);
    };
    return (
        <div className='container mx-auto my-8'>
            <h2 className="text-2xl font-bold text-center uppercase mb-5">Add a Class</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-3xl mx-auto bg-gray-100 px-8 border py-10 shadow-lg rounded-2xl'>

                <div className='grid grid-cols-4 w-full mb-5 gap-5 justify-between '>
                    <p>Class Name</p>
                    <input placeholder="Class Name"
                        className='px-3 py-2 text-lg border'
                        {...register("courseName", { required: true })} />
                    <p>Class Image</p>
                    <input type='file'
                        {...register("photo", { required: true })} />
                </div>
                <div className='grid grid-cols-4 w-full mb-5 gap-5 justify-between '>
                    <p>Instractor Name</p>
                    <input placeholder="Instractor Name" disabled
                        className='px-3 py-2 text-lg border'
                        defaultValue={user && user?.displayName}
                        {...register("instractorName")} />
                    <p>Instractor Email</p>
                    <input placeholder="Instractor Email" disabled
                        className='px-3 py-2 text-lg border'
                        defaultValue={user && user?.email}
                        {...register("instractorEmail")} />
                </div>
                <div className='grid grid-cols-4 w-full mb-5 gap-5 justify-between '>
                    <p>Avaiable Seats</p>
                    <input placeholder="Available Seats" type='number'
                        className='px-3 py-2 text-lg border'
                        {...register("seats", { required: true })} />
                    <p>Price</p>
                    <input placeholder="Price" type='number'
                        className='px-3 py-2 text-lg border'
                        {...register("price", { required: true })} />
                </div>

                <div>
                    {errors.courseName && <span className='text-red-600 block mt-2'>Class Name field is required</span>}
                    {errors.photo && <span className='text-red-600 block mt-2'>Image is required</span>}
                    {errors.instractorName && <span className='text-red-600 block mt-2'>Instractor Name field is required</span>}
                    {errors.instractorEmail && <span className='text-red-600 block mt-2'>Instractor Email field is required</span>}
                    {errors.seats && <span className='text-red-600 block mt-2'>Seats field is required</span>}
                    {errors.price && <span className='text-red-600 block mt-2'>Price field is required</span>}
                </div>

                <input className='btn block mx-auto mt-8' value='Add Class' type="submit" />
            </form>
        </div>
    );
};

export default AddClass;