import React from 'react';
import SideNav from './dashboard/_components/SideNav';

export default function DashboardLayout({ children }) {
    return (
        <div>
            <div className='fixed md:w-64 hidden md:block bg-red-200'>
                <SideNav/>
            </div>
            <div className='md:ml-64 bg-green-400'>
                {children}
            </div>
        </div>
    );
}


