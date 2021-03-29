import React from 'react'
import {Link} from 'react-router-dom'


import "./postCard.css"



const PostCard = ({
    postImg,
    categorieLink,
    postTitle,
    postText,
    authorImg,
    authorName,
    postDate,
    category,
    changeCategory,
    inFavorites,
    addFavorite,
}) => {


    return (
        <div className="post-card">
            <div className="post-image">
                <a href="#" className="post-image-link">
                    <img src={postImg} alt="post-img" className="post-img"/>
                </a>
            </div>
            <div className="post-content">
                <div className="categorie-favorit">
                    <Link to={`/category/${categorieLink}`} onClick={() => changeCategory(categorieLink)} className="categorie-link">{categorieLink}</Link>

                    <button className="favorite-btn" title={inFavorites ? 'Remove from Favorites' : 'Add to Favorites'} onClick={() => addFavorite()}>
                        {inFavorites ? <span className="liked"></span> : <span className="noliked"></span>} 
                    </button>
                    
                </div>
                <h5 className="post-title">
                    <a href="#" className="post-title-link">{postTitle}</a>
                </h5>
                <p className="post-text">{postText}</p>
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
        </div>
    )
}

export default PostCard 
