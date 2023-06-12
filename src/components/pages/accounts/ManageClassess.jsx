import React from 'react';
import ManageClassCard from '../../shared/ManageClassCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const ManageClassess = () => {
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: classes = [], refetch } = useQuery({
        queryKey: ['manageclasse'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/all-classes')
            return res.data;
        },
    })
    // console.log(classes);
    const handleAction = (type, id) => {
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: type })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    console.log('status updated to Approved');
                }
            })
    }
    return (
        <div className='container mx-auto my-8'>
            <h2 className="text-4xl font-bold text-center uppercase mb-12">manage classes</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <span className="text-2xl">#</span>
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes && classes.map((course, index) =>
                                <ManageClassCard
                                    handleAction={handleAction}
                                    course={course}
                                    index={index}
                                    key={course._id} />
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClassess;