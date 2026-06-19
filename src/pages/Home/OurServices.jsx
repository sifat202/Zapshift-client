import React, { useState } from 'react';
import img from '../../assets/banner/service.png'
const OurServices = () => {
   const info = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      caption: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      caption: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      caption: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      caption: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      caption: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      title: "Parcel Return",
      caption: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  const [IsClicked,SetIsClicked] = useState(null);
  const funClick =(id)=>{
SetIsClicked(id);
}
    return (
        <div className='bg-secondary rounded-3xl'>

            <div className="pt-10 pb-15">
                <div className="text-center  text-white"><h1 className="text-3xl font-semibold">Our Services</h1>
            <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
           
            <div className="   grid grid-cols-3 mx-auto max-w-[1100px] justify-center  p-10 2xl:gap-5 gap-1 ">
                {info.map((item)=>(
                    <div onClick={()=>funClick(item.id)}  key={item.id} className={`flex-col ${IsClicked === item.id ? "bg-yellow-200" : "bg-white"} space-y-5 2xl:max-w-100 max-w-70 p-8 rounded-2xl justify-center  2xl:h-75 cursor-pointer`}>
                        <img className='mx-auto h-15' src={img} alt="" />
                        <div className="text-center space-y-3">
                            <h3 className="font-semibold">{item.title}</h3>
                        <p>{item.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default OurServices;