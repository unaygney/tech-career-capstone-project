import React from 'react';
import Navbar from '../../layouts/Navbar';
//Import Images
import Image1 from "../../assets/concert.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HomePage() {

  return (

    <div className="">
      <Navbar />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Image1} alt="concert-photo" /></SwiperSlide>


      </Swiper>
    </div>
  );
}

export default HomePage;
