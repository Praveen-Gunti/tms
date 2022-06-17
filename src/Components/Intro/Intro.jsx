import React from 'react';
import './Intro.css';
import Banner1 from '../../img/home-banner-1.jpg';
import Banner2 from '../../img/home-banner-2.jpg';
import Banner3 from '../../img/home-banner-3.jpg';
import Banner4 from '../../img/home-banner-4.jpg';
import Banner5 from '../../img/home-banner-5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Intro = () => {
  return (
    <div className="intro">
      {/* Slider */}
      <Swiper
        spaceBetween={100}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        grabCursor={true}
        className="intro-slider"
      >
        {/* 3 */}
        <SwiperSlide>
          <img src={Banner3} alt="" />
          <h1>
            Never Stay At
            <span className="middletext">ONE</span>
            Place
          </h1>
          <p>Travel with Life</p>
        </SwiperSlide>
        {/* 1 */}
        <SwiperSlide>
          <h1>
            Find
            <span className="middletext">The Best</span>
            Place
          </h1>
          <p>For Your Holidays</p>
          <img src={Banner1} alt="" />
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <h1>
            See<span className="middletext"> The</span> World
          </h1>
          <p>Wonderful Destinations</p>
          <img src={Banner2} alt="" />
        </SwiperSlide>

        {/* 4 */}
        <SwiperSlide>
          <h1>
            Find <span className="middletext">The Best Partner</span>To Enjoy
          </h1>
          <p>Make the Life More Happy</p>
          <img src={Banner4} alt="" />
        </SwiperSlide>
        {/* 5 */}
        <SwiperSlide>
          <h1>
            Explore <span className="middletext">And</span>Enjoy
          </h1>
          <p>Life is Short</p>
          <img src={Banner5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Intro;
