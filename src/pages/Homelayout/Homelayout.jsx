import React from 'react';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';

const Homelayout = () => {
    return (
        <div className='flex flex-col max-w-7xl mx-auto min-h-screen'>
            <Navbar></Navbar>
            <main className='flex-grow'>
                <Outlet>

            </Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;