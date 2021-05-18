import React from 'react'
import { Route } from 'react-router'

import PostCards from './PostCards/PostCards'
import CategoryPage from './CategoryPage/CategoryPage'
import SimpleSlider from './Slider/Slider'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'
import AuthorPage from './AuthorPage/AuthorPage'
import PostPage from './PostPage/PostPage'
import TagPage from './TagPage/TagPage'
import Index from '../../Components/ScrollUpBtn/ScrollUpBtn'
import FavoritesPage from './FavoritesPage/FavoritesPage'

import './main.css'

const Main = ({
    category,
    changeCategory,
    changeSlice,
    sliceTo,
    sliceFrom
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
                        changeSlice={changeSlice}
                        sliceTo={sliceTo}
                        sliceFrom={sliceFrom}
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
                <AboutPage
                    changeCategory={changeCategory}
                />
            )}/>
            <Route path="/contact" render = {() => (
                <ContactPage
                    changeCategory={changeCategory}
                />
            )}/>
            <Route path="/favorites" render = {() => (
                <FavoritesPage
                    category={category}
                    changeCategory={changeCategory}
                />
            )}/>
            <Route path="/author" render ={() => (
                <AuthorPage
                    changeSlice={changeSlice}
                    sliceTo={sliceTo}
                    sliceFrom={sliceFrom}
                />
            )}/>
            <Route path={`/post/:post_Title`} render = {({match}) => (
                <PostPage
                    match={match}
                    category={category}
                    changeCategory={changeCategory}
                />
            )}/>
            <Route path={`/tag/:postTag`} render = {({match}) => (
                <TagPage
                    match={match}
                    category={category}
                    changeCategory={changeCategory}
                />
            )}/>

        </main>
    )
}

export default Main
