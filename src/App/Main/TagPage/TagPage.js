import React from 'react'
import Index from '../../../Components/ScrollUpBtn/ScrollUpBtn'
import Title from '../../../Components/Title/Title'
import PostCard from '../PostCards/PostCard/PostCard'
import postCardItems from '../PostCards/postCardItems'
import Sidebar from '../Sidebar/Sidebar'

import './tagPage.css'

const TagPage = ({
    category,
    changeCategory,
    addToFavoritesPage,
    removeFromFavoritesPage,
    inFavoritesPage,
}) => {

    return (
        <section className="tag-section">
            <div className="container-fluid">
                <Title
                    namePage={"Tag: "}
                    title={category}
                />
                <div className="blog-row">
                    <div className="blog-content">
                        <div className="post-cards-row">
                            {
                                (postCardItems.filter(post => post.tags.find(tag => tag === category)).map(({
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
                                            addToFavoritesPage={addToFavoritesPage}
                                            removeFromFavoritesPage={removeFromFavoritesPage}
                                            inFavoritesPage={inFavoritesPage}
                                        />
                                    )
                                }))
                            }
                        </div>
                    </div>
                    <Sidebar
                        changeCategory={changeCategory}
                    />
                </div>
            </div>
            <Index/>
        </section>

    )
}

export default TagPage