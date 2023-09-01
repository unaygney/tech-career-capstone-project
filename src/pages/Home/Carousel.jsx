import React from "react";
//Import Images
import Image1 from "../../assets/concert-min.jpg";
import Image2 from "../../assets/concert-2-min.jpg";
import Image3 from "../../assets/exhibit-min.jpg";
import Image4 from "../../assets/art-min.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        allowTouchMove={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image1} alt="concert-photo" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Image2} alt="concert-photo-2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Image3} alt="exhibit-photo" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Image4} alt="theater-photo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
