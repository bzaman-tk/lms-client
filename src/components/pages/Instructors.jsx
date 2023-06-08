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
            <div className="grid grid-cols-3 gap-5">
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