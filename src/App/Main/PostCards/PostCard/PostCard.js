import React from 'react'
import {Link} from 'react-router-dom'
import PostTop from '../../../Components/PostTop/PostTop'

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
    category,
    changeCategory,
    inFavorites,
    addFavorite
}) => {

    return (
        <div className="post-card">
            <div className="post-content">
                <PostTop
                    postImg = {postImg}
                    categorieLink = {categorieLink}
                    postTitle = {<Link to={`/${category}/post/${post_Title}`} className="post-title-link">{postTitle}</Link>                    }
                    changeCategory = {changeCategory}
                    inFavorites = {inFavorites}
                    addFavorite = {addFavorite}
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
