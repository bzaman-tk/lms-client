import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassCard from '../shared/ClassCard';
import useAuth from '../../hook/useAuth';
import useSelected from '../../hook/useSelected';
import useEnrolled from '../../hook/useEnrolled';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
    const { user, loading } = useAuth()
    const navigate = useNavigate()
    const isSelected = useSelected()
    const isEnrolled = useEnrolled()
    const { isLoading, isError, data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-liard.vercel.app/classes')
            return res.json();
        },
    })
    // console.log(isSelected);
    const handleAction = id => {
        // console.log(id);
        if (!user) {
            Swal.fire({
                title: 'Please Login',
                text: "You need to login to select classes",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
            return;
        }
        fetch('https://summer-camp-server-liard.vercel.app/classes/selected', {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('access-token')}`,
            },
            body: JSON.stringify({ email: user?.email, id })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    isSelected.push(id)
                    // console.log(isSelected);
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Class has been selected.',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }

    if (isLoading) {
        return <div className="h-screen w-1/2 mx-auto text-center flex justify-center items-center"><progress className="progress w-56"></progress></div>
    }

    return (
        <div className='container mx-auto my-12'>
            <h2 className="text-3xl font-bold text-center uppercase mb-8 dark:text-gray-300">Our Classes</h2>
            <div className="grid grid-cols-4 gap-10">
                {
                    classes && classes.map(
                        cls => // Can't use name 'class' cz it's reserved :P 
                            <ClassCard
                                handleAction={handleAction}
                                isSelected={isSelected.includes(cls._id)}
                                isEnrolled={isEnrolled.includes(cls._id)}
                                cls={cls}
                                key={cls._id} />
                        // console.log(cls._id, isSelected.id);
                    )
                }
            </div>
        </div>
    );
};

export default Classes;