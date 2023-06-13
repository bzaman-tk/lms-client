import { Link } from 'react-router-dom';
import logo from '../../assets/logo-w.jpg';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard </Link></li>
        }
    </>
    return (
        <div className="bg-gray-200 dark:bg-gray-900 ">
            <div className="navbar text-gray-900 container mx-auto dark:text-white">
                <div className="navbar-start w-full sm:w-auto">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-600">
                            {
                                navItems
                            }
                            {
                                user ?
                                    <><Link to='/dashboard'>
                                        <img className='w-10 h-10 rounded-full mx-auto' src={user?.photoURL} alt={user?.displayName} />
                                    </Link>
                                        <button onClick={() => logOut()} className="btn ml-3">Logout</button>
                                    </>
                                    :
                                    <Link to='/login' className='btn'>Login</Link>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl">
                        <img className='rounded-full' src={logo} alt="" />
                    </Link>
                </div>
                <div className="ml-52 navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <div className="navbar-end hidden sm:flex">
                    {
                        user ?
                            <><Link to='/dashboard'><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt={user?.displayName} /></Link>
                                <button onClick={() => logOut()} className="btn ml-3">Logout</button>
                            </>
                            :
                            <Link to='/login' className='btn'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;