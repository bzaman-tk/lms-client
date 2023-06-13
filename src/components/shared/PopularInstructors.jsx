import { useQuery } from '@tanstack/react-query';
import React from 'react';
import InstructorCard from './InstructorCard';
import { Link } from 'react-router-dom';

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
        <div className='dark:bg-gray-800'>
            <div className='container mx-auto py-12 '>
                <h2 className="text-3xl font-bold text-center uppercase mb-12 dark:text-gray-300">Popular Instructors</h2>

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
                <Link to='/instructors'><button className="btn border-0 mx-auto mt-12 block w-32 bg-orange-500 dark:bg-gray-300 dark:text-gray-900">More</button></Link>
            </div>
        </div>
    );
};

export default PopularInstructors;