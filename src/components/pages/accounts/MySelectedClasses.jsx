import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SelectedClassCard from '../../shared/SelectedClassCard';
import useAuth from '../../../hook/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    const { user } = useAuth()
    const { isLoading, isError, data: selected = [], refetch } = useQuery({
        queryKey: ['sclass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-liard.vercel.app/classes/selected/${user?.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`,
                }
            })
            return res.json();
        },
    })
    // console.log(selected)
    const handleAction = id => {
        // console.log(id)
        fetch('https://summer-camp-server-liard.vercel.app/classes/selected', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('access-token')}`,
            },
            body: JSON.stringify({ email: user?.email, courseID: id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Selected Class has been Deleted.',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }


    if (isLoading) {
        return <div className="h-screen w-1/2 mx-auto text-center flex justify-center items-center"><progress className="progress w-56"></progress></div>
    }


    if (selected.length <= 0) {
        return <h2 className="text-3xl text-yellow-600 mt-20 font-bold text-center uppercase mb-8">
            No Selected Class Found!!! <br />
            <Link className='btn mt-5' to='/classes'>See All Classes</Link>
        </h2>
    }

    return (
        <div className='w-full'>
            <h2 className="text-3xl font-bold text-center uppercase mb-8">My Selected Classes</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Avaiable Seats</th>
                            <th>Price</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selected && selected.map((cls, i) =>
                                <SelectedClassCard
                                    cls={cls}
                                    handleAction={handleAction}
                                    index={i}
                                    key={cls._id}
                                />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;