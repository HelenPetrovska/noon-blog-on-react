import React from 'react'
import PostCards from './PostCards/PostCards'
import { Route } from 'react-router'
import CategoryPage from './CategoryPage/CategoryPage'
import SimpleSlider from './Slider/Slider'
import AboutPage from './AboutPage/AboutPage'

import './main.css'

const Main = ({
    category,
    changeCategory
}) => {
    return (
        <main className="main">
            <Route path="/" exact render={() => (
                <>
                    <SimpleSlider
                        category={category}
                        changeCategory={changeCategory}
                    />
                    <PostCards
                        category={category}
                        changeCategory={changeCategory}
                    />
                </>
            )}/>
            <Route path="/category/" render = {() => (
                <CategoryPage
                    category={category}
                    changeCategory={changeCategory}
                />
            )}/>
            <Route path="/about" render = {() => (
                <AboutPage/>
            )}/>
        </main>
    )
}

export default Main
