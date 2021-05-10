import React from 'react'
import {Link} from 'react-router-dom'
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
    addToFavoritesPage,
    removeFromFavoritesPage,
    inFavoritesPage
}) => {

    return (
        <div className="post-card">
            <div className="post-content">
                <PostTop
                    key={id}
                    id={id}
                    postImg = {postImg}
                    categorieLink = {categorieLink}
                    postTitle = {<Link to={`/post/${post_Title}`} className="post-title-link">{postTitle}</Link>}
                    post_Title = {post_Title}
                    changeCategory = {changeCategory}
                    postDescription = {postDescription}
                    authorImg = {authorImg}
                    authorName = {authorName}
                    postDate = {postDate}
                    addToFavoritesPage={addToFavoritesPage}
                    removeFromFavoritesPage={removeFromFavoritesPage}
                    inFavoritesPage={inFavoritesPage}
                />
            </div>
        </div>

    )
}

export default PostCard 
