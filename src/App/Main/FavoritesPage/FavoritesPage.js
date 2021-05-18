import React from 'react'
import { keys } from 'lodash'
import {connect} from 'react-redux'
import Index from '../../../Components/ScrollUpBtn/ScrollUpBtn'
import Title from '../../../Components/Title/Title'
import PostCard from '../PostCards/PostCard/PostCard'
import postCardItems, { getPostCardItemsObject } from '../PostCards/postCardItems'
import Sidebar from '../Sidebar/Sidebar'

import './favoritesPage.css'


const FavoritesPage = ({
    category,
    changeCategory,
    postCardItemsObject = getPostCardItemsObject(postCardItems),
    isLiked
}) => {
    return (
        <section className="favorite-section">
            <div className="container-fluid">
                <Title
                    namePage={""}
                    title={"Favorites"}
                />
                <div className="blog-row">
                    <div className="blog-content">
                        <div className="post-cards-row">
                            {
                                keys(isLiked).filter(postId => isLiked[postId]===true).map(postId => (
                                    <PostCard
                                        key={postCardItemsObject[postId].id}
                                        id={postCardItemsObject[postId].id}
                                        postImg={postCardItemsObject[postId].postImg}
                                        categorieLink={postCardItemsObject[postId].categorieLink}
                                        postTitle={postCardItemsObject[postId].postTitle}
                                        post_Title={postCardItemsObject[postId].post_Title}
                                        postDescription={postCardItemsObject[postId].postDescription}
                                        authorImg={postCardItemsObject[postId].authorImg}
                                        authorName={postCardItemsObject[postId].authorName}
                                        postDate={postCardItemsObject[postId].postDate}
                                        category={category}
                                        changeCategory={changeCategory}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <Sidebar
                        changeCategory={changeCategory}
                    />
                </div>
            </div>
        </section>
    )
}

const mapState = (state) => ({
    isLiked:state.postLikeState
})

export default connect(
    mapState
)(FavoritesPage)