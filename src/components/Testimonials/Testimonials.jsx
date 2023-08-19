import React, { useState, useEffect } from "react";
import "./testi.scss";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
// import { EffectCoverflow, Pagination } from "swiper";
import { TestimonialData } from "../../data/TestimonialData";

const TestoSlider = () => {
  // let imageWidth = 210;
  // let imageHeight = 400;
  const [isMobile, setIsMobile] = useState(false);
  const [imageWidth, setImageWidth] = useState(210);
  const [imageHeight, setImageHeight] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    if (isMobile) {
      setImageWidth(100);
      setImageHeight(200);
    } else {
      setImageWidth(250);
      setImageHeight(500);
    }
  }, []);

  return (
    <div className="testiSlider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {TestimonialData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {/*<img src={item.src} alt=" " />*/}
              <Image
                src={item.src}
                width={imageWidth}
                height={imageHeight}
                className="img"
                quality={100}
                alt="img"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testi_container">
      <h2>Testimonials</h2>
      <div className="slider">
        <TestoSlider />
      </div>
    </div>
  );
};

export default Testimonials;
