import React from "react"
import {Link} from 'react-router-dom'
import Slider from "react-slick"

import postCardItems from '../PostCards/postCardItems'


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slider.css"

const SimpleSlider = ({
    category,
    changeCategory
    }) => {
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
        }
  return (
    <div className = "slider-row">
        <Slider {...settings}>
            {
                postCardItems.filter(post => post.sliderImg).map(post =>(
                    <div className="slide" key={post.id}>
                        <div className="slide-image">
                            <img src={post.sliderImg} className="slide-img" alt="slide-img"/>
                        </div>
                        <div className="slide-bg"></div>
                        <div className ="slide-content">
                            <div>
                                <Link to={`/category/${post.categorieLink}`} onClick={() => changeCategory(post.categorieLink)} className="slide-categorie-link">{post.categorieLink}</Link>
                            </div>
                            <h3 className="slide-title">
                                <Link to={`/post/${post.post_Title}`} href="#" className="slide-title-link">{post.postTitle}</Link>
                            </h3>   
                            <div className="slide-info">
                                <div className="author-name">
                                    <Link to="/author" className="author-name-link">{post.authorName}</Link>
                                </div>
                                <div className="slide-dot"></div>
                                <div>
                                    <p className="slide-date">{post.postDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </div>
  );
}

export default SimpleSlider


