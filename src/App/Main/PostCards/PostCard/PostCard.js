import React from 'react'

import "./postCard.css"


const PostCard = ({
    postImg,
    categorieLink,
    postTitle,
    postText,
    authorImg,
    authorName,
    postDate
}) => {

    return (
        <div className="post-card">
            <div className="post-image">
                <a href="#" className="post-image-link">
                    <img src={postImg} alt="post-img" className="post-img"/>
                </a>
            </div>
            <div className="post-content">
                <a href="#" className="categorie-link">{categorieLink}</a>
                <h5 className="post-title">
                    <a href="#" className="post-title-link">{postTitle}</a>
                </h5>
                <p className="post-text">{postText}</p>
                <div className="post-info">
                    <div className="author">
                        <a href="#" className="author-link"><img src={authorImg} alt="author-img" className="author-img"/></a>
                    </div>
                    <div className="author-name">
                        <a href="#" className="author-name-link">{authorName}</a>
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
