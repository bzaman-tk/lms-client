import { AiFillHome, AiOutlineAudit, AiOutlineDashboard, AiOutlineDollar, AiOutlineFileMarkdown, AiOutlineHome, AiOutlinePlusCircle, AiOutlineTeam } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import useRole from '../../hook/useRole';

const DashboardSidebar = () => {
    const { user, logOut } = useAuth()
    const [isAdmin, isInstractor] = useRole()
    return (
        <>
            <li><Link to='/'>
                <AiOutlineHome className='text-3xl' /> Home
            </Link></li>
            <li><Link to='/dashboard'>
                <AiOutlineDashboard className='text-3xl' /> Dashboard
            </Link></li>
            {
                (!isAdmin && !isInstractor) && <>
                    {/* <li><Link to='/classes'>Classes</Link></li> */}
                    <li><Link to='/dashboard/history'>
                        <AiOutlineDollar className='text-3xl' /> Payment History
                    </Link></li>
                    <li>
                        <Link to='/dashboard/my-selected'>
                            <AiOutlineFileMarkdown className='text-3xl' /> MY SELECTED CLASSES</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/my-enrolled'>
                            <AiOutlineAudit className='text-3xl' /> MY ENROLLED CLASSES</Link>
                    </li>
                </>
            }
            {isAdmin && <>
                <li><Link to='/dashboard/classes'>
                    <AiOutlineAudit className='text-3xl' /> Manage Classes
                </Link></li>
                <li><Link to='/dashboard/manage-users'>
                    <AiOutlineTeam className='text-3xl' /> Manage Users
                </Link></li>
            </>}
            {isInstractor && <>
                <li><Link to='/dashboard/add-class'>
                    <AiOutlinePlusCircle className='text-3xl' /> Add A Class
                </Link></li>
                <li><Link to='/dashboard/my-classes'>
                    <AiOutlineFileMarkdown className='text-3xl' /> My Classes
                </Link></li>
            </>}
            {
                user && <>
                    <li className='items-center border-t-2 mt-3 pt-3 border-gray-400'>
                        <span className="tooltip tooltip-bottom p-0" data-tip={user?.displayName}>
                            <img className='w-10 h-10 rounded-full my-3' src={user?.photoURL} alt="" />
                        </span>
                        <h2 className="text-center uppercase p-0">
                            <strong>Name: </strong> {user?.displayName}
                        </h2>
                        <p className="text-lg p-0"><strong>Email: </strong> {user?.email}</p>
                    </li>
                    <button onClick={() => logOut()} className="btn mt-3 btn-sm w-1/3 mx-auto">Logout</button>
                </>
            }
        </>
    );
};

export default DashboardSidebar;