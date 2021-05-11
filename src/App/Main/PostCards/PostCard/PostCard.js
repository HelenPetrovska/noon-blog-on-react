import React from 'react'
import PostTop from '../../../../Components/PostTop/PostTop'

import "./postCard.css"

const PostCard = ({
    id,
    postImg,
    categorieLink,
    postTitle,
    post_Title,
    postDescription,
    authorImg,
    authorName,
    postDate,
    changeCategory,
}) => {

    return (
        <div className="post-card">
            <div className="post-content">
                <PostTop
                    key={id}
                    id={id}
                    postImg = {postImg}
                    categorieLink = {categorieLink}
                    postTitle = {postTitle}
                    post_Title = {post_Title}
                    changeCategory = {changeCategory}
                    postDescription = {postDescription}
                    authorImg = {authorImg}
                    authorName = {authorName}
                    postDate = {postDate}
                />
            </div>
        </div>

    )
}

export default PostCard 
