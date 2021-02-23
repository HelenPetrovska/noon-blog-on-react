import React from 'react'
import Swiper from 'react-id-swiper'

import "../../../../node_modules/swiper/swiper.min.css"
import "./slider.css"



const Autoplay = () => {
    const params = {
      centeredSlides: true,
    //   loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
    return (
        <section className="slider">
            <div className="slider-row">
                <Swiper {...params}>
                    <div className="slide">
                        <div className="slide-image slide1">1
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-image slide2">2
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-image slide3">3
                        </div>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default Autoplay;
  