import React from 'react';
import './Cards.css';
import Card1 from '../../img/box-amaravathi.jpg';
import Card2 from '../../img/box-Hyderabad.jpg';
import Card3 from '../../img/box-Tirupati-Balaji-Temple.jpg';
import Card4 from '../../img/box-Vijayawada.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Cards = () => {
  return (
    <div className="container">
      <Swiper
        // spaceBetween={100}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        // slidesPerView={1}
        grabCursor={true}
      >
        <div className="box">
          <SwiperSlide>
            {/* 1 */}
            <img src={Card1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {/* 2 */}
            <img src={Card2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {/* 3 */}
            <img src={Card3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {/* 4 */}
            <img src={Card4} alt="" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Cards;
