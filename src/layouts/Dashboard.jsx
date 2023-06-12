import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/shared/DashboardSidebar';
import logo from '../assets/logo-w.jpg';
import { FaBars } from 'react-icons/fa';
const Dashboard = () => {

    return (
        <div className="drawer drawer-mobile !h-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center px-5">
                <label htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button fixed top-5 right-5 z-50 lg:hidden">
                    <FaBars />
                </label>

                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li className='border-b-2 border-gray-400 pb-5'>
                        <Link className='p-0 mb-3' to='/'>
                            <img className='rounded-xl' src={logo} alt="" />
                        </Link>
                    </li>
                    <DashboardSidebar />
                </ul>

            </div>
        </div>
    )
};

export default Dashboard;