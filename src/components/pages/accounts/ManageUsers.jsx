import React from 'react';
import ManageUserCard from '../../shared/ManageUserCard';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {

    const { isLoading, data: users = [], refetch } = useQuery({
        queryKey: ['manageusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-users')
            return res.json();
        },
    })
    console.log(users);
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
                        <ManageUserCard />
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;