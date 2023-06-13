import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SelectedClassCard from '../../shared/SelectedClassCard';
import useAuth from '../../../hook/useAuth';

const MySelectedClasses = () => {
    const { user } = useAuth()
    const { isLoading, isError, data: selected = [], refetch } = useQuery({
        queryKey: ['sclass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes/selected/${user?.email}`, {
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
        fetch('http://localhost:5000/classes/selected', {
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
                }
            })
    }
    return (
        <div>
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