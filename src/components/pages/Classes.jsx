import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassCard from '../shared/ClassCard';

const Classes = () => {
    const { isLoading, isError, data: classes = [], error } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json();
        },
    })
    console.log(classes);
    return (
        <div className='container mx-auto my-12'>
            <div className="grid grid-cols-3 gap-5">
                {
                    classes && classes.map(
                        cls => // Can't use name 'class' cz it's reserved :P 
                            <ClassCard
                                cls={cls}
                                key={cls._id} />
                    )
                }
            </div>
        </div>
    );
};

export default Classes;