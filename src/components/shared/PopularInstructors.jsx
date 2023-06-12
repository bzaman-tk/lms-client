import { useQuery } from '@tanstack/react-query';
import React from 'react';
import InstructorCard from './InstructorCard';

const PopularInstructors = () => {

    const { isLoading, isError, data: instractor = [], error } = useQuery({
        queryKey: ['pinstractor'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instractors/popular')
            return res.json();
        },
    })
    // console.log(instractor);
    return (
        <div className='container mx-auto mt-12'>
            <h2 className="text-3xl font-bold text-center uppercase mb-8">Popular Instructors</h2>
            <div className="grid grid-cols-3 gap-12 w-10/12 mx-auto">
                {
                    instractor && instractor.map(ins =>
                        <InstructorCard
                            instructor={ins}
                            key={ins._id}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default PopularInstructors;