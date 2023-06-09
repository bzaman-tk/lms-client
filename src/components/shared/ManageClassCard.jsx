import React from 'react';

const ManageClassCard = () => {
    return (
        <tr>
            <td>
                1
            </td>
            <td>
                <img src="/tailwind-css-component-profile-2@56w.png" alt=" " />

            </td>
            <td>
                Zemlak,
            </td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>status</td>
            <th className='text-right'>
                <button className="btn  bg-green-600 border-0 btn-xs">Approve</button>
                <button className="btn mx-1 my-px bg-red-600 border-0  btn-xs">Deny</button>
                <button className="btn btn-xs border-0 hover:bg-gray-300 hover:text-black">Feebback</button>
            </th>
        </tr>
    );
};

export default ManageClassCard;