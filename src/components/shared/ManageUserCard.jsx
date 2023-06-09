import React from 'react';

const ManageUserCard = () => {
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />

            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <td>Purple</td>
            <th className='text-center'>
                <button className="btn w-10/12 bg-red-600 border-0 btn-sm">Make Admin</button>
                <button className="btn block mx-auto mt-1 w-10/12 btn-sm border-0 bg-green-600">Make Instractor</button>
            </th>
        </tr>
    );
};

export default ManageUserCard;