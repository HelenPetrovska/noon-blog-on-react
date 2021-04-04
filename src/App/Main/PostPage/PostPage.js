import React from 'react'
import { Link } from 'react-router-dom'
import PostTop from '../../Components/PostTop/PostTop'
import postCardItems, { getPostCardItemsObject } from '../PostCards/postCardItems'
import Sidebar from '../Sidebar/Sidebar'

import './postPage.css'

const PostPage = ({
    category,
    changeCategory,
    addFavorite,
    inFavorites,
    match,
    postCardItemsObject = getPostCardItemsObject(postCardItems),
}) => {

    const linkTitle = postCardItems.filter(post => post.post_Title === match.params.postTitle)

    const id = linkTitle[0].id

    return (
        <section className="page-section post-section">
            <div className="container-fluid">
                <div className="blog-row">
                    <div className="blog-content">
                        <div className="page-content">
                            <PostTop
                                postImg = {postCardItemsObject[id].postImgBig}
                                categorieLink = {postCardItemsObject[id].categorieLink}
                                postTitle = {postCardItemsObject[id].postTitle}
                                changeCategory = {changeCategory}
                                inFavorites = {inFavorites}
                                addFavorite = {addFavorite}
                                postDescription = {postCardItemsObject[id].postDescription}
                                authorImg = {postCardItemsObject[id].authorImg}
                                authorName = {postCardItemsObject[id].authorName}
                                postDate = {postCardItemsObject[id].postDate}
                            />
                        </div>
                    </div>
                    <Sidebar/>
                </div>
            </div>
        </section>

    )
}

export default PostPage