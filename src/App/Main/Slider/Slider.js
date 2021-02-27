import SwiperCore, { Navigation, Pagination, Autoplay, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css'
import './slider.css'


SwiperCore.use([Navigation, Pagination, Autoplay, A11y, EffectFade]);

export default () => {
    return (
      <Swiper effect="fade"
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        autoplay>
        {[
            <div className="slide slide1"></div>,
            <div className="slide slide2"></div>,
            <div className="slide slide3"></div>
         ].map((el) => {
          return <SwiperSlide>{el}</SwiperSlide>;
        })}
      </Swiper>
    );
  };
  

