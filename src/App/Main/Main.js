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
import Index from '../Components/ScrollUpBtn/ScrollUpBtn'

import './main.css'
import FavoritesPage from './FavoritesPage/FavoritesPage'

const Main = ({
    category,
    changeCategory,
    addFavorite,
    removeFavorite,
    inFavorites,
    addToFavoritesPage,
    inFavoritesPage,
    removeFromFavoritesPage
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
                        removeFavorite={removeFavorite}
                        inFavorites={inFavorites}
                        addToFavoritesPage={addToFavoritesPage}
                        inFavoritesPage={inFavoritesPage}
                        removeFromFavoritesPage={removeFromFavoritesPage}
                    />
                    <Index/>
                </>
            )}/>
            <Route path="/category/" render = {() => (
                <CategoryPage
                    category={category}
                    changeCategory={changeCategory}
                    addFavorite={addFavorite}
                    inFavorites={inFavorites}
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
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    inFavorites={inFavorites}
                    addToFavoritesPage={addToFavoritesPage}
                    inFavoritesPage={inFavoritesPage}
                    removeFromFavoritesPage={removeFromFavoritesPage}
                />
            )}/>
            <Route path="/author" render ={() => (
                <AuthorPage/>
            )}/>
            <Route path={`/post/:postTitle`} render = {({match}) => (
                <PostPage
                    match={match}
                    category={category}
                    changeCategory={changeCategory}
                    addFavorite={addFavorite}
                    inFavorites={inFavorites}
                />
            )}/>
            <Route path={`/tag/:postTag`} render = {({match}) => (
                <TagPage
                    match={match}
                    category={category}
                    changeCategory={changeCategory}
                    addFavorite={addFavorite}
                    inFavorites={inFavorites}
                />
            )}/>

        </main>
    )
}

export default Main
