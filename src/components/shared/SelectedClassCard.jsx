import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SelectedClassCard = ({ cls, index, handleAction }) => {
    const { _id, name, photo, price, seats, instructor, enroll } = cls
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td> <img className='w-16 rounded-lg' src={photo} alt=" " />  </td>
            <td>{name}</td>
            <td>{
                enroll ? (seats - enroll.length) : seats
            }</td>
            <td>$ {price}</td>
            <td className='text-center'>
                <button onClick={() => handleAction(_id)} className="btn mx-auto   bg-red-600 border-0">
                    <FaTrash />
                </button>
                <Link
                    to='/dashboard/payment'
                    state={{ id: _id, price }}
                    className="btn bg-orange-600   border-0 mx-auto ml-2">Pay</Link>
            </td>
        </tr>
    );
};

export default SelectedClassCard;