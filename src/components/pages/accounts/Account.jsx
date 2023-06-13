import React from 'react';
import MySelectedClasses from './MySelectedClasses';
import useRole from '../../../hook/useRole';
import { Link } from 'react-router-dom';
import MyEnrolledClasses from './MyEnrolledClasses';

const Account = () => {
    const [isAdmin, isInstractor] = useRole()

    if (isAdmin) {
        return (
            <div className="container mx-auto">
                <h2 className='text-center text-2xl font-bold uppercase mt-12'>Welcome admin</h2>
                <div className="flex gap-10 max-w-md mx-auto mt-12 justify-center items-center">
                    <Link className='btn border-0' to='/dashboard/manage-users'>Manage Users</Link>
                    <Link className='btn border-0' to='/dashboard/classes'>Manage Classes</Link>
                </div>
            </div>
        )
    }
    if (isInstractor) {
        return (
            <div className="container mx-auto">
                <h2 className='text-center text-2xl font-bold uppercase mt-12'>Welcome Instractor</h2>
                <div className="flex gap-10 max-w-md mx-auto mt-12 justify-center items-center">
                    <Link className='btn border-0' to='/dashboard/add-class'>Add A Class</Link>
                    <Link className='btn border-0' to='/dashboard/my-classes'>My Classes</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <h2 className='text-center text-2xl font-bold uppercase mt-12'>Welcome Student Dashboard</h2>
            <div className="flex gap-10 max-w-md mx-auto mt-12 justify-center items-center">
                <Link className='btn border-0' to='/dashboard/my-selected'>SELECTED CLASSES</Link>
                <Link className='btn border-0' to='/dashboard/my-enrolled'>ENROLLED CLASSES</Link>
                <Link className='btn border-0' to='/dashboard/history'>Payment History</Link>
            </div>
        </div>
    );
};

export default Account;