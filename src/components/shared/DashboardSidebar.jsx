import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    const isAdmin = false
    const isInstractor = true
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            {isAdmin && <>
                <li><Link to='/dashboard/classes'>Manage Classes</Link></li>
                <li><Link to='/dashboard/manage-users'>Manage Users</Link></li>
            </>}
            {isInstractor && <>
                <li><Link to='/dashboard/add-class'>Add A Class</Link></li>
                <li><Link to='/dashboard/my-classes'>My Classes</Link></li>
            </>}

        </>
    );
};

export default DashboardSidebar;