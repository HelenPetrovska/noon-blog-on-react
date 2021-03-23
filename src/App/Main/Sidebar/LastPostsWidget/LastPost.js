import React from 'react'
import './lastPost.css'

const LastPost = ({
    nb,
    postImg,
    postTitle,
    postDate
}) => {
    return (
        <div className="last-post">
            <div className="last-post-image">
                <a href="#" className="last-post-link">
                    <img src={postImg} alt="last-post-img" className="last-post-img"/>
                </a>
            </div>
            <div className="nb">{nb}</div>
            <div className="last-post-content">
                <h6 className="last-post-title">
                    <a href="#" className="last-title-link">{postTitle}</a>
                </h6>
                <div>
                    <p className="last-post-date">{postDate}</p>
                </div>
            </div>
        </div>
    )
}

export default LastPost