import React from 'react';

const MyClassesCard = ({ course, index }) => {
    const { _id, name, price, photo, seats, status, feedback, enroll } = course;
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <img className='w-16 rounded-lg' src={photo} alt="" />
            </td>
            <td>
                {name}
            </td>
            <td>{seats}</td>
            <td className='text-right'>$ {price}</td>
            <td>{status ? status : 'Pending'}</td>
            <td>{enroll ? enroll?.length : 0}</td>
            <td>{feedback ? (status !== 'approved') ? feedback : '--' : '--'}</td>
            <th>
                <button className="btn btn-xs">Update</button>
            </th>
        </tr>
    );
};

export default MyClassesCard;