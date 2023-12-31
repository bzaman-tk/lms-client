import React from 'react';
import ManageUserCard from '../../shared/ManageUserCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: users = [], refetch } = useQuery({
        queryKey: ['manageusers'],
        queryFn: async () => {
            const res = await axiosSecure.get('https://summer-camp-server-liard.vercel.app/all-users')
            return res.data;
        },
    })
    const handleAction = (type, id) => {
        fetch(`https://summer-camp-server-liard.vercel.app/all-users/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('access-token')}`,
            },
            body: JSON.stringify({ role: type })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire(
                        'Done!',
                        'The Status Updated',
                        'success'
                    )
                }
            })
    }
    return (
        <div className='container mx-auto my-12 '>
            <h2 className="text-4xl font-bold text-center uppercase mb-12">manage Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <span className="text-2xl">#</span>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user, i) =>
                                <ManageUserCard
                                    data={user}
                                    handleAction={handleAction}
                                    key={user._id}
                                    index={i}
                                />
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;