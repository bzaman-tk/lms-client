import React from 'react';

const ManageUserCard = ({ data, index, handleAction }) => {
    const { _id, name, photo, email, role, enroll } = data || {}
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <img className='w-16 rounded-lg' src={photo} alt=" " />

            </td>
            <td>
                {name}
            </td>
            <td>{email}</td>
            <td>{role}</td>
            <th className='text-center'>
                <button onClick={() => handleAction('admin', _id)} disabled={role === 'admin' && true} className="btn w-10/12 bg-red-600 border-0 btn-sm">Make Admin</button>
                <button onClick={() => handleAction('instructor', _id)} disabled={role === 'instructor' && true} className="btn block mx-auto mt-1 w-10/12 btn-sm border-0 bg-green-600">Make Instractor</button>
            </th>
        </tr>
    );
};

export default ManageUserCard;