import React from 'react'
import PostCard from './PostCard/PostCard'
import postCardsItems from './postCardItems'
import PostPagination from './PostPagination/PostPagination'


import "./postCards.css"

const PostCards = ({
    category,
    changeCategory,
    addFavorite,
    removeFavorite,
    inFavorites,
    addToFavoritesPage,
    inFavoritesPage,
    removeFromFavoritesPage
}) => {
    return (
        <section className="post-cards">
            <div className="container-fluid">
                <div className="post-cards-row">
                    {
                        postCardsItems.map(({
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
                                    id={id}
                                    postImg={postImg}
                                    categorieLink={categorieLink}
                                    postTitle={postTitle}
                                    post_Title={post_Title}
                                    postDescription={postDescription}
                                    authorImg={authorImg}
                                    authorName={authorName}
                                    postDate={postDate}
                                    category={category}
                                    changeCategory={changeCategory}
                                    addFavorite={addFavorite}
                                    removeFavorite={removeFavorite}
                                    inFavorites={inFavorites}
                                    addToFavoritesPage={addToFavoritesPage}
                                    inFavoritesPage={inFavoritesPage}
                                    removeFromFavoritesPage={removeFromFavoritesPage}
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