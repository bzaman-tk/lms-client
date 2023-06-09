import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/dashboard/classes'>Manage Classes</Link></li>
            <li><Link to='/dashboard/users'>Manage Users</Link></li>
        </>
    );
};

export default DashboardSidebar;