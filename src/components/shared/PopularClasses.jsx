import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassCard from './ClassCard';
import useSelected from '../../hook/useSelected';
import useEnrolled from '../../hook/useEnrolled';
import useAuth from '../../hook/useAuth';

const PopularClasses = () => {
    const { user, loading } = useAuth()
    const isSelected = useSelected()
    const isEnrolled = useEnrolled()
    const { isLoading, isError, data: classes = [], refetch } = useQuery({
        queryKey: ['pclasses'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes/popular')
            return res.json();
        },
    })
    // console.log(classes)
    const handleAction = id => {
        if (!user) {
            alert('please login')
            return;
        }
        fetch('http://localhost:5000/classes/selected', {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email, id })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    alert('Enrolled SuccsFully')
                }
            })
    }
    return (
        <div className='container mx-auto mt-12'>
            <h2 className="text-3xl font-bold text-center uppercase mb-8">Popular Classes</h2>
            <div className="grid grid-cols-4 justify-center gap-12 w-10/12 mx-auto">
                {
                    classes && classes.map(course =>
                        <ClassCard
                            handleAction={handleAction}
                            isSelected={isSelected.includes(course._id)}
                            isEnrolled={isEnrolled.includes(course._id)}
                            cls={course}
                            key={course._id} />
                    )
                }
            </div>
        </div>
    );
};

export default PopularClasses;