import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Authlayout = () => {
    return (
        <div className='flex flex-col mx-auto max-w-7xl min-h-screen'>
            <div className="">
                <Navbar></Navbar>
            </div>
<div className="flex-grow">
 <Outlet></Outlet>
</div>
<div className="">
    <Footer></Footer>
</div>
           
        </div>
    );
};

export default Authlayout;