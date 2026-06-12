import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import OurServices from './OurServices';
import Brands from './Brands';
import Reveiws from './Reveiws';
const reviewPromise = fetch('../../../public/reviews.json').then(res=>res.json())
const Home = () => {
    return (
        <div>
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
    <Reveiws reviewPromise={reviewPromise}></Reveiws>
            </div>
        </div>
    );
};

export default Home;