import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
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
    isLiked,
    addLike,
    removeLike
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
                <button className="favorite-btn" title={isLiked ? 'Remove from Favorites' : 'Add to Favorites'} onClick={() => (isLiked ? removeLike(id) : addLike(id))}>
                    {isLiked ? <span className="liked"></span> : <span className="noliked"></span>} 
                </button>
            </div>
            <h4 className="post-title"><Link to={`/post/${post_Title}`} className="post-title-link">{postTitle}</Link></h4>
            <h4 className="post-title-page">{postTitle}</h4>
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

PostTop.propTypes ={
    id:PropTypes.number.isRequired,
    postImg:PropTypes.string,
    categorieLink:PropTypes.string.isRequired,
    postTitle:PropTypes.string.isRequired,
    post_Title:PropTypes.string.isRequired,
    postDescription:PropTypes.string,
    authorImg:PropTypes.string,
    authorName:PropTypes.string,
    postDate:PropTypes.string,
}

PostTop.defaultProps = {
    postImg:"./images/noImage.jpg",
    postDescription:"No description",
    authorImg:"",
    authorName:"No name",
    postDate:"",
}

const mapState = (state,{id}) => ({
    isLiked:state.postLikeState[id]
})

const mapDispatch = dispatch => ({
    addLike:(id) => dispatch({
        type:"LIKE",
        id
    }),
    removeLike:(id) => dispatch({
        type:"DISLIKE",
        id
    })

})

export default connect(
    mapState,
    mapDispatch

)(PostTop)