import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import OurServices from './OurServices';
import Brands from './Brands';
import Reveiws from './Reveiws';
import Procedure from '../../Components/Procedure.jsx/Procedure';
import EarnBanner from '../../Components/Earn/EarnBanner';

// const reviewPromise = fetch('../../Jsons/reviews.json').then(res=>res.json())
const Home = () => {
    return (
        <div className='flex flex-col justify-center'>
            <Banner></Banner>
            <div className="py-10">
                <HowItWorks></HowItWorks>
            </div>
            <div className="py-10">
               <OurServices></OurServices>
            </div>
            <div className="my-10">
                <Brands></Brands>
            </div>
            <div className="my-10">
    <Reveiws></Reveiws>
            </div>
            <div className="my-10">
                <Procedure></Procedure>
            </div>
            <div className="my-10 mx-auto">
<EarnBanner></EarnBanner>
            </div>
        </div>
    );
};

export default Home;