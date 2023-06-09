import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageClassCard = ({ course, index, handleAction }) => {
    const { _id, name, photo, price, seats, instructor, enroll, status } = course
    const { isLoading, isError, data: instructorInfo = [], error } = useQuery({
        queryKey: ['instructorInfo'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructors/${instructor}`)
            return res.json();
        },
    })
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <img className='w-16 rounded-md' src={photo} alt=" " />
            </td>
            <td>
                {name}
            </td>
            <td>{instructorInfo.name}</td>
            <td>{instructorInfo.email}</td>
            <td>{enroll ? (seats - enroll.length) : seats}</td>
            <td>{price}</td>
            <td>{status ? status : 'pending'}</td>
            <th className='text-right'>
                <button onClick={() => handleAction('approved', _id)} disabled={status ? (status === 'approved' || status === 'denied') && true : false} className="btn bg-green-600 border-0 btn-xs">Approve</button>
                <button onClick={() => handleAction('denied', _id)} disabled={status ? (status === 'approved' || status === 'denied') && true : false} className="btn mx-1 my-px bg-red-600 border-0  btn-xs">Deny</button>
                <button className="btn btn-xs border-0 hover:bg-gray-300 hover:text-black">Feebback</button>
            </th>
        </tr>
    );
};

export default ManageClassCard;