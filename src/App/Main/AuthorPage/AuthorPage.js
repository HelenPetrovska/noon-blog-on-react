import React from 'react'
import Index from '../../../Components/ScrollUpBtn/ScrollUpBtn'
import PostCards from '../PostCards/PostCards'
import AuthorWidget from '../Sidebar/AuthorWidget/AuthorWidget'


import './authorPage.css'

const AuthorPage = ({
    toggleFavorite,
    inFavorites,
    addToFavoritesPage,
    removeFromFavoritesPage,
    inFavoritesPage,
    changeSlice,
    sliceTo,
    sliceFrom


}) => {
    return (
        <section className="page-section author-section">
            <div className="container-fluid">
                <AuthorWidget/>
                <PostCards
                    addToFavoritesPage={addToFavoritesPage}
                    removeFromFavoritesPage={removeFromFavoritesPage}
                    inFavoritesPage={inFavoritesPage}
                    changeSlice={changeSlice}
                    sliceTo={sliceTo}
                    sliceFrom={sliceFrom}
                />
            </div>
            <Index/>
        </section>

    )
}

export default AuthorPage