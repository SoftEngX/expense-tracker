import React from 'react';
import SideNav from './dashboard/_components/SideNav';

export default function DashboardLayout({ children }) {
    return (
        <div>
            <div>
                <SideNav/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}


