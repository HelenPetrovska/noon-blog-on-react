import React from 'react'
import { Link } from 'react-router-dom'

import './miniPost.css'

const MiniPost = ({
    nb,
    postImg,
    postTitle,
    post_Title,
    postDate,
    prevNextLink
}) => {
    return (
        <div className="mini-post">
            <div className="mini-post-image">
                <Link to={`/post/${post_Title}`} className="mini-post-link">
                    <img src={postImg} alt="mini-post-img" className="mini-post-img"/>
                </Link>
            </div>
            <div className="nb">{nb}</div>
            <div className="mini-post-content">
                <Link to={`/post/${post_Title}`} className="categorie-link">{prevNextLink}</Link>
                <h6 className="mini-post-title">
                    <Link to={`/post/${post_Title}`} className="mini-title-link">{postTitle}</Link>
                </h6>
                <div>
                    <p className="mini-post-date">{postDate}</p>
                </div>
            </div>
        </div>
    )
}

export default MiniPost