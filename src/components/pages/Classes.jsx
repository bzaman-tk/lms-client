import { useQuery } from '@tanstack/react-query';
import React from 'react';

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
        <div>
            fhsfjasd
        </div>
    );
};

export default Classes;