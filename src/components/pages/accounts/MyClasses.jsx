import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hook/useAuth';

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
        <div>

        </div>
    );
};

export default MyClasses;