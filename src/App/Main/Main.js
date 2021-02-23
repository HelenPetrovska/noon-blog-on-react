import React from 'react'
import PostCards from './PostCards/PostCards'
import Subscribe from './Subscribe/Subscribe'
import Autoplay from './Slider/Slider'

const Main = () => {
    return (
        <main className="main">
            <Autoplay/>
            <PostCards/>
            <Subscribe/>
        </main>
    )
}

export default Main
