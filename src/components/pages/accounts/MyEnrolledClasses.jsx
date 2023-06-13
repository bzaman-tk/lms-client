import React from 'react';
import useAuth from '../../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import SelectedClassCard from '../../shared/SelectedClassCard';
import EnrolledClassCard from '../../shared/EnrolledClassCard';
import { Link } from 'react-router-dom';

const MyEnrolledClasses = () => {
    const { user } = useAuth()
    const { isLoading, isError, data: selected = [], refetch } = useQuery({
        queryKey: ['enrolledclass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-liard.vercel.app/classes/enrolled/${user?.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`,
                }
            })
            return res.json();
        },
    })
    const handleAction = id => {
        console.log(id);
    }
    if (isLoading) {
        return <div className="h-screen w-1/2 mx-auto text-center flex justify-center items-center"><progress className="progress w-56"></progress></div>
    }


    if (selected.length <= 0) {
        return <h2 className="text-3xl text-yellow-600 mt-20 font-bold text-center uppercase mb-8">
            No Enrolled Class Found!!! <br />
            <Link className='btn mt-5' to='/classes'>See All Classes</Link>
        </h2>
    }
    return (
        <div className='mt-5 pt-5 w-full'>
            <h2 className="text-3xl font-bold text-center uppercase mb-8">My Enrolled Classes</h2>
            <div className="overflow-x-auto">
                <table className="table mx-auto w-full">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            {/* <th>Avaiable Seats</th>
                            <th>Price</th>
                            <th className='text-center'>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selected && selected.map((cls, i) =>
                                <EnrolledClassCard
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

export default MyEnrolledClasses;