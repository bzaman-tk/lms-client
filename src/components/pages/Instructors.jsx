import React from 'react';
import InstructorCard from '../shared/InstructorCard';
import { useQuery } from '@tanstack/react-query';

const Instructors = () => {
    const { isLoading, isError, data: instructors = [], error } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/instructors')
            return res.json();
        },
    })
    // console.log(instructors);
    return (
        <div className='container mx-auto my-12'>
            <h2 className="text-3xl font-bold text-center uppercase mb-8 dark:text-gray-300">Our  Instructors</h2>
            <div className="grid grid-cols-3 gap-12 w-10/12 mx-auto">
                {
                    instructors && instructors.map(instructor =>
                        <InstructorCard instructor={instructor} key={instructor._id} />
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;