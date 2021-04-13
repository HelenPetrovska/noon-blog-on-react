import React from 'react'

import PostCard from '../../PostCards/PostCard/PostCard'
import postCardItems from '../../PostCards/postCardItems'



const PostCardsFilter = ({
    category,
    changeCategory,
    addFavorite,
    inFavorites
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
                            post_Title,
                            postDescription,
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
                                    post_Title={post_Title}
                                    postDescription={postDescription}
                                    authorImg={authorImg}
                                    authorName={authorName}
                                    postDate={postDate}
                                    changeCategory={changeCategory}
                                    addFavorite={addFavorite}
                                    inFavorites={inFavorites}
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