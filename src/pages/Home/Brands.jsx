import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../../assets/brands/amazon.png"
import img2 from "../../assets/brands/amazon_vector.png"
import img3 from "../../assets/brands/casio.png"
import img4 from "../../assets/brands/moonstar.png"
import img5 from "../../assets/brands/randstad.png"
import img6 from "../../assets/brands/star.png"
import img7 from "../../assets/brands/start_people.png"
const BrandLogos = [img1,img3,img4,img5,img6,img7]
const Brands = () => {
    return (
       <Swiper
       slidesPerView={3}
       centeredSlides={true}
       loop={true}
       modules={[Autoplay]}
       speed={1000}
       autoplay={{
        delay:0,
        disableOnInteraction:false,
       }}
       spaceBetween={20}
       grabCursor={true}
       >
{
BrandLogos.map((logos)=>
         <SwiperSlide><img src={logos} alt="" /></SwiperSlide>

)

}  
</Swiper>     
    );
};

export default Brands;