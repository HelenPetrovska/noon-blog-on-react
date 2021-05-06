import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'


import './postTop.css'

const PostTop = ({
    id,
    postImg,
    categorieLink,
    postTitle,
    post_Title,
    changeCategory,
    postDescription,
    authorImg,
    authorName,
    postDate,
    addToFavoritesPage,
    removeFromFavoritesPage,
    toggleFavorite,
    inFavorites,
    isLiked

}) => {

    return (
        <div className="post-top">
            <div className="post-image">
                <Link to={`/post/${post_Title}`} className="post-image-link">
                    <img src={postImg} alt="post-img" className="post-img"/>
                </Link>
                <img src={postImg} alt="post-img" className="post-img-post-page"/>
            </div>
            <div className="categorie-favorit">
                <Link to={`/category/${categorieLink}`} onClick={() => changeCategory(categorieLink)} className="categorie-link">{categorieLink}</Link>
                <button className="favorite-btn" title={inFavorites ? 'Remove from Favorites' : 'Add to Favorites'} onClick={() => (inFavorites ? (removeFromFavoritesPage(id), toggleFavorite(id)) : (addToFavoritesPage(id), toggleFavorite(id)))}>
                    {isLiked ? <span className="liked"></span> : <span className="noliked"></span>} 
                </button>
            </div>
            <h4 className="post-title">{postTitle}</h4>
            <p className="post-description">{postDescription}</p>
            <div className="post-info">
                <div className="author">
                    <Link to="/author" className="author-link"><img src={authorImg} alt="author-img" className="author-img"/></Link>
                </div>
                <div className="author-name">
                    <Link to="/author" className="author-name-link">{authorName}</Link>
                </div>
                <div className="dot"></div>
                <div>
                    <p className="post-date">{postDate}</p>
                </div>
            </div>
        </div>
    )
}

const mapState = (state,{id}) => ({
    isLiked:state[id]
})

export default connect(
    mapState

)(PostTop)