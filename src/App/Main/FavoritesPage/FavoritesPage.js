import { keys } from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../PostCards/PostCard/PostCard'
import postCardItems, { getPostCardItemsObject } from '../PostCards/postCardItems'
import PostCards from '../PostCards/PostCards'


const FavoritesPage = ({
    category,
    changeCategory,
    addFavorite,
    removeFavorite,
    inFavorites,
    addToFavoritesPage,
    inFavoritesPage,
    postCardItemsObject = getPostCardItemsObject(postCardItems),
    removeFromFavoritesPage

}) => {
    return (
        <section className="post-cards">
            <div className="container-fluid">
                <div className="post-cards-row">
                    {
                        keys(inFavoritesPage).map(postId => (
                            <div className="post-top">
                                <div className="post-image">
                                    <a href="#" className="post-image-link">
                                        <img src={postCardItemsObject[postId].postImg} alt="post-img" className="post-img"/>
                                    </a>
                                </div>
                                <div className="categorie-favorit">
                                    <Link to={`/category/${postCardItemsObject[postId].categorieLink}`} onClick={() => changeCategory(postCardItemsObject[postId].categorieLink)} className="categorie-link">{postCardItemsObject[postId].categorieLink}</Link>
                                    <button className="favorite-btn" title={inFavorites[postId] ? 'Remove from Favorites' : 'Add to Favorites'} onClick={() => inFavorites[postId] ? (removeFromFavoritesPage(postId),removeFavorite(postId)) : (addToFavoritesPage(postId),addFavorite(postId))}>
                                        {inFavorites[postId] ? <span className="liked"></span> : <span className="noliked"></span>} 
                                    </button>
                                </div>
                            </div>
                        
                            // <PostCard
                            //     key={postId}
                            //     id={[postId].id}
                            //     postImg={postCardItemsObject[postId].postImg}
                            //     categorieLink={postCardItemsObject[postId].categorieLink}
                            //     postTitle={postCardItemsObject[postId].postTitle}
                            //     post_Title={postCardItemsObject[postId].post_Title}
                            //     postDescription={postCardItemsObject[postId].postDescription}
                            //     authorImg={postCardItemsObject[postId].authorImg}
                            //     authorName={postCardItemsObject[postId].authorName}
                            //     postDate={postCardItemsObject[postId].postDate}
                            //     category={category}
                            //     changeCategory={changeCategory}
                            //     inFavorites={inFavorites}
                            //     addFavorite={addFavorite}
                            //     addToFavoritesPage={addToFavoritesPage}
                            //     inFavoritesPage={inFavoritesPage}
                            //     removeProductFromCart={removeProductFromCart}
                            // />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FavoritesPage