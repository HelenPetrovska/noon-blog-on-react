import React from 'react'
import Swiper from './Slider/Slider'
import PostCards from './PostCards/PostCards'
import Subscribe from './Subscribe/Subscribe'


const Main = () => {
    return (
        <main className="main">
            <Swiper/>
            <PostCards/>
            <Subscribe/>
        </main>
    )
}

export default Main
