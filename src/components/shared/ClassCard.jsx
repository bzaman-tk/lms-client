import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useRole from '../../hook/useRole';
import useSelected from '../../hook/useSelected';
import useAuth from '../../hook/useAuth';
import { Rotate } from "react-awesome-reveal";
import { useState } from 'react';

const ClassCard = ({ cls, handleAction, isSelected, isEnrolled }) => {
    const [isClick, setIsClick] = useState(false)
    const { user, loading } = useAuth()
    const [isAdmin, isInstractor] = useRole()
    const { _id, name, photo, price, seats, instructor, enroll } = cls
    //const [isSelected] = useSelected(_id)
    // console.log(_id);
    const { isLoading, isError, data: instructorInfo = [], error } = useQuery({
        queryKey: ['instructorInfo', instructor],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-liard.vercel.app/users/instructors/${instructor}`)
            return res.json();
        },
    })
    // console.log(instructorInfo)
    return (
        <div className={`card  bg-gray-100 border shadow-xl  
        ${(seats === 0 || (seats - enroll?.length) === 0) ?
                'bg-red-600 text-white dark:bg-red-500' : 'dark:bg-slate-800'
            } 
            dark:text-gray-300 dark:border-gray-900`}>
            <figure>
                <Rotate className='w-full'>
                    <img className='h-52 w-full' src={photo} alt="" />
                </Rotate>
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {name}</h2>
                <p><strong>Instructor: </strong> {instructorInfo.name}</p>
                <p><strong>Avaiable Seats: </strong>
                    {
                        enroll ? seats - (enroll?.length) : seats
                    }
                </p>
                <p><strong>Price:</strong> $ {price}</p>
                <p><strong>Enrolled:</strong> {enroll && enroll?.length || '0'}</p>
                <div onClick={() => {
                    if (user) { setIsClick(true) }
                }} className="card-actions justify-end">
                    <button
                        onClick={() => handleAction(_id)}
                        disabled={
                            (isClick || isAdmin || isInstractor || isSelected || isEnrolled || seats === 0 || (seats - enroll?.length) === 0) && true
                        }
                        className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;