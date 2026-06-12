import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { LuTruck } from 'react-icons/lu';

const HowItWorks = () => {
    const info=[
        {
            id:1,
            title:"booking pick & drop",
            caption:'From personal paackages to business shipments -- We deliver on time, every time',
        },
        {
            id:2,
            title:"Cash on Delivery",
            caption:'From personal paackages to business shipments -- We deliver on time, every time',
        },
        {
            id:3,
            title:"Delivery Hub",
            caption:'From personal packages to business shipments -- We deliver on time, every time',
        },
         {
            id:4,
            title:"Booking SME & Corporate",
            caption:'From personal paackages to business shipments -- We deliver on time, every time',
        },
       
    ]
    return (
        <div>
            <div className="flex gap-5 mx-auto justify-center">
                {info.map((item)=>(
                    <div className="flex flex-col space-y-5 max-w-70 p-7 rounded-2xl border-gray-200 border-1 shadow-2xl" 
                    
                    key={item.id}>
<div className="flex flex-col space-y-3 ">
    <LuTruck className='text-4xl'></LuTruck>
    <h3 className='font-semibold'>{item.title}</h3>
</div>
<p className='text-sm mt-auto  text-[#606060]'>{item.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;