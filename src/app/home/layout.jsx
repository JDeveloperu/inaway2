"use client";

import React, { useState} from 'react';
import SidebarHome from '../../components/sideBar/Sidebar';
import NavBarHome from '../../components/navBar/NavBar';

import { useSession } from 'next-auth/react'

const LayoutHome = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const { data: session, status } = useSession()
    console.log(session, status)

    return (
        <div className='w-full h-screen flex overflow-hidden bg-zinc-800'>

            <div className='w'>
                <SidebarHome isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            </div>

            <div className='flex-1 bg-zinc-800 flex-grow rounded-2xl overflow-hidden shadow-md'>
                <NavBarHome onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                {children}
            </div>
        </div>
    );
}

export default LayoutHome;
