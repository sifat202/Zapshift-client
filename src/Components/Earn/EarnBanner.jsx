import React from 'react';
import img1 from '../../assets/Earnbanner/be-a-merchant-bg.png'
import img2 from '../../assets/Earnbanner/location-merchant.png'

const EarnBanner = () => {
    return (
        <div className='max-w-w-300'>
            {/* Added 'relative' and 'overflow-hidden' here to contain the absolute images */}
            <div className="flex relative overflow-hidden bg-[#03373D] h-110 2xl:w-300 border-2 border-gray-400 rounded-3xl ">
                <figure>
                    <img src={img1} className='absolute inset-0 w-full  object-cover' alt="" />
                </figure>
                
                <div className="flex flex-col m-18 space-y-10 z-10"> {/* Added z-10 to keep text above bg */}
                    <div className="flex-col space-y-10 flex">
                        <h1 className='text-5xl text-white font-bold'>Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
                        <p className='text-gray-300 text-xl'>We offer the lowest delivery charge with the highest value along with <br /> with 100% safety of your product. Pathao courier delivers your parcels <br /> in every corner of Bangladesh right on time.</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className='btn rounded-4xl p-8 border-[#caeb66] shadow-[#03373D] shadow-1 text-[25px] bg-[#caeb66] text-[#03373D] '>Become A merchant</button>
                        <button className='btn btn rounded-4xl shadow shadow-[#caeb66] border-[#caeb66] border-1 p-8 text-[25px] text-[#caeb66] bg-[#03373D] '>Earn with Zapshift Courier</button>
                    </div>
                </div>

                {/* Changed this figure to absolute and positioned it to the right side */}
                <figure className='absolute right-4 bottom-16 w-[450px]'>
                    <img src={img2} className='w-full' alt="" />
                </figure>
            </div>
        </div>
    );
};

export default EarnBanner;