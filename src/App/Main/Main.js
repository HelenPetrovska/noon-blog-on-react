import React from 'react'
import { Route } from 'react-router'

import PostCards from './PostCards/PostCards'
import CategoryPage from './CategoryPage/CategoryPage'
import SimpleSlider from './Slider/Slider'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'
import AuthorPage from './AuthorPage/AuthorPage'
import PostPage from './PostPage/PostPage'

import './main.css'

const Main = ({
    category,
    changeCategory,
    addFavorite,
    inFavorites
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
                        addFavorite={addFavorite}
                        inFavorites={inFavorites}
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
            <Route path="/contact" render = {() => (
                <ContactPage/>
            )}/>
            <Route path="/author" render ={() => (
                <AuthorPage/>
            )}/>
            <Route path={`/${category}/post/:postTitle`} component = {PostPage}/>
        </main>
    )
}

export default Main
