import React from 'react';
import img1 from '../../assets/assetsImg/live-tracking.png'
import img2 from '../../assets/assetsImg/safe-delivery.png'

const Procedure = () => {
    const data = [
        {
            title: 'Live parcel Tracking',
            img: img1,
            caption: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
        },
        {
            title: '100% Safe Delivery',
            img: img2,
            caption: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
        },
        {
            title: "24/7 Call Center Support",
            img: img2,
            caption: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
        }

    ]
    return (
        <div>
            {/* <hr /> */}
            <div className="max-w-300 mx-auto  flex-1 h-screen ">
   <div className="flex flex-col space-y-5  p-10">
    {data.map(i=>(
        <div className=" flex border-2 items-center  rounded-2xl border-gray-400 shadow-md shadow-black ">
    <div className=" my-15  m-10 ">
        <figure>
        <img className='' src={i.img} alt="" />
        </figure>

    </div>
    <div className=" my-15 p-10">
        <h1 className='text-2xl font-semibold mb-5'>{i.title}</h1>
        <p>{i.caption}</p>
    </div>
        </div>
    ))}
   </div>

            </div>
        </div>
    );
};

export default Procedure;