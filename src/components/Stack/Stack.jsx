import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Stack = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Стек</h2>
      <span className="section__subtitle">Технологии</span>
      <Swiper
        className="testimonials__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
            <SwiperSlide className="testimonial__card" key={7}>
              <Frontend/>
            </SwiperSlide>
            <SwiperSlide className="testimonial__card" key={8}>
              <Backend/>
            </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Stack;
