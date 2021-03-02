import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"

export default function SimpleSlider() {
  var settings = {
    autoplay:true,
    speed: 1000,
    autoplaySpeed: 2500,
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    navigation:true,
  };
  return (
    <div className = "slider-row">
        <Slider {...settings}>
            <div className="slide">
                <div className="slide-image">
                    <img src="/images/slider4.jpg" className="slide-img" alt="slide-img"/>
                </div>
                <div className="slide-bg"></div>
                <div className ="slide-content">
                    <div>
                        <a href="#" className="slide-categorie-link">Travel</a>
                    </div>
                    <h5 className="slide-title">
                        <a href="#" className="slide-title-link">Top 10 Forests That Every Nature Lover Must Visit</a>
                    </h5>
                    <div className="slide-info">
                        <div className="author-name">
                            <a href="#" className="author-name-link">David Smith</a>
                        </div>
                        <div className="slide-dot"></div>
                        <div>
                            <p className="slide-date">January 17, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src="/images/slider6.jpg" className="slide-img" alt="slide-img"/>
                </div>
                <div className="slide-bg"></div>
                <div className ="slide-content">
                    <div>
                        <a href="#" className="slide-categorie-link">Food</a>
                    </div>
                    <h5 className="slide-title">
                        <a href="#" className="slide-title-link">7 Dinner Recipes for a Date Night at Home</a>
                    </h5>
                    <div className="slide-info">
                        <div className="author-name">
                            <a href="#" className="author-name-link">David Smith</a>
                        </div>
                        <div className="slide-dot"></div>
                        <div>
                            <p className="slide-date">January 15, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="slide-image">
                    <img src="/images/slider3.jpg" className="slide-img" alt="slide-img"/>
                </div>
                <div className="slide-bg"></div>
                <div className ="slide-content">
                    <div>
                        <a href="#" className="slide-categorie-link">Livestyle</a>
                    </div>
                    <h5 className="slide-title">
                        <a href="#" className="slide-title-link">How reading rewires your brain for higher intelligence</a>
                    </h5>
                    <div className="slide-info">
                        <div className="author-name">
                            <a href="#" className="author-name-link">David Smith</a>
                        </div>
                        <div className="slide-dot"></div>
                        <div>
                            <p className="slide-date">January 15, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
  );
}


