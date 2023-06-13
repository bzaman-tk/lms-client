import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassCard from './ClassCard';
import useSelected from '../../hook/useSelected';
import useEnrolled from '../../hook/useEnrolled';
import useAuth from '../../hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce } from "react-awesome-reveal";
import Swal from 'sweetalert2';

const PopularClasses = () => {
    const { user, loading } = useAuth()
    const navigate = useNavigate()
    const isSelected = useSelected()
    const isEnrolled = useEnrolled()
    const { isLoading, isError, data: classes = [], refetch } = useQuery({
        queryKey: ['pclasses'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-liard.vercel.app/classes/popular')
            return res.json();
        },
    })
    // console.log(classes)
    const handleAction = id => {
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
                    refetch()
                    Swal.fire(
                        'Done!',
                        ' ',
                        'success'
                    )
                }
            })
    }
    return (
        <div className='container mx-auto py-12'>
            <h2 className="text-3xl font-bold text-center uppercase mb-12 dark:text-gray-300">Popular Classes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-12 w-10/12 mx-auto">
                {
                    classes && classes.map(course =>
                        <ClassCard
                            handleAction={handleAction}
                            isSelected={isSelected.includes(course._id)}
                            isEnrolled={isEnrolled.includes(course._id)}
                            cls={course}
                            key={course._id} />
                    )
                }
            </div>
            <Bounce delay={500}>
                <Link to='/classes'><button className="btn border-0 mx-auto mt-12 block w-32 bg-green-500 dark:bg-gray-500 dark:text-gray-900">More</button></Link>
            </Bounce>
        </div>
    );
};

export default PopularClasses;