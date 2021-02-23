import React from 'react'
import PostCard from './PostCard/PostCard'
import postCardsItem from './postCardItems'
import PostPagination from './PostPagination/PostPagination'


import "./postCards.css"

const PostCards = () => {
    return (
        <section className="post-cards">
            <div className="container-fluid">
                <div className="post-cards-row">
                    {
                        postCardsItem.map(({
                            id,
                            postImg,
                            categorieLink,
                            postTitle,
                            postText,
                            authorImg,
                            authorName,
                            postDate
                        }) => {
                            return (
                                <PostCard 
                                    key={id}
                                    postImg={postImg}
                                    categorieLink={categorieLink}
                                    postTitle={postTitle}
                                    postText={postText}
                                    authorImg={authorImg}
                                    authorName={authorName}
                                    postDate={postDate}
                                />
                            )
                        })
                    }
                </div>
                <PostPagination/>
            </div>
        </section>
    )
}

export default PostCards