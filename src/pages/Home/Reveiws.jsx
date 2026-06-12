import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from '../../Components/Testimonialcard';

const Reveiws = ({ reviewPromise }) => {
    const reveiws = use(reviewPromise);

    return (
        <div>
            <h3 className="text-xl text-center">Reveiw</h3>
            <Swiper
               effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 10,
          stretch: '65%',
          depth: 200,
          modifier: 1,
          scale:0.75,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
            >
                {reveiws.map(review => <SwiperSlide key={reveiws.id}>
                    <TestimonialCard review={review}></TestimonialCard>
                </SwiperSlide>)}

            </Swiper>
        </div>
    );
};

export default Reveiws;