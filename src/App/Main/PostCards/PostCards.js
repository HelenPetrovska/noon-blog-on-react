import React from 'react'
import PostCard from './PostCard/PostCard'
import postCardsItems from './postCardItems'
import PostPagination from './PostPagination/PostPagination'


import "./postCards.css"

const PostCards = ({
    category,
    changeCategory,
    toggleFavorite,
    inFavorites,
    addToFavoritesPage,
    removeFromFavoritesPage,
    inFavoritesPage,
    changeSlice,
    sliceTo,
    sliceFrom
}) => {
    return (
        <section className="post-cards">
            <div className="container-fluid">
                <div className="post-cards-row">
                    {
                        postCardsItems.slice(`${sliceFrom}`,`${sliceTo}`).map(({
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
                                    toggleFavorite={toggleFavorite}
                                    inFavorites={inFavorites}
                                    addToFavoritesPage={addToFavoritesPage}
                                    removeFromFavoritesPage={removeFromFavoritesPage}
                                    inFavoritesPage={inFavoritesPage}
                                    changeSlice={changeSlice}
                                    sliceTo={sliceTo}
                                    sliceFrom={sliceFrom}           
                                />
                            )
                        })
                    }
                </div>
                <PostPagination
                    changeSlice={changeSlice}
            />
            </div>
        </section>
    )
}

export default PostCards