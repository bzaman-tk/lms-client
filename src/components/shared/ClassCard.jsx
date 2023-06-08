import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ClassCard = ({ cls }) => {
    const { _id, name, photo, price, seats, instructor } = cls
    const { isLoading, isError, data: instructorInfo = [], error } = useQuery({
        queryKey: ['instructorInfo'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructors/${instructor}`)
            return res.json();
        },
    })
    // console.log(instructorInfo)
    return (
        <div className="card w-96 bg-gray-100 border shadow-xl">
            <figure>
                <img src={photo} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><strong>Instructor:</strong> {instructorInfo.name}</p>
                <p><strong>Avaiable Seats:</strong> {seats}</p>
                <p><strong>Price:</strong> {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;