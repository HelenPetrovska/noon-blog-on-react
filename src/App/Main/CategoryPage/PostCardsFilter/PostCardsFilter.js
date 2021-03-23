import React from 'react'

import PostCard from '../../PostCards/PostCard/PostCard'
import postCardItems from '../../PostCards/postCardItems'



const PostCardsFilter = ({
    category,
    changeCategory
}) => {
    return (
        <section className="post-cards">
            <div className="container-fluid">
                <div className="post-cards-row">
                    {
                        postCardItems.filter(post => post.categorieLink===category).map(({
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
                                    changeCategory={changeCategory}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default PostCardsFilter