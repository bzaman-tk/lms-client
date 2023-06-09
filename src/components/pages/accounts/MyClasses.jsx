import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hook/useAuth';
import MyClassesCard from './MyClassesCard';

const MyClasses = () => {
    const { user } = useAuth()
    const { isLoading, data: classes = [], refetch } = useQuery({
        queryKey: ['myclasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all-classes/${user?.email}`)
            return res.json();
        },
    })
    console.log(classes);
    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold text-center uppercase mb-5">My Classes</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <span className="text-2xl">#</span>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Total Enrolled <br /> Students</th>
                            <th>Feedback</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes && classes.map((course, i) =>
                                <MyClassesCard
                                    index={i}
                                    course={course}
                                    key={course._id}
                                />
                            )
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default MyClasses;