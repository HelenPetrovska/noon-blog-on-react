import React from 'react'
import { Link } from 'react-router-dom'
import Comments from '../../Components/Comments/Comments'
import MiniPost from '../../Components/MiniPost/MiniPost'
import PostTop from '../../Components/PostTop/PostTop'
import Index from '../../Components/ScrollUpBtn/ScrollUpBtn'
import Social from '../../Components/Social/Social'
import TagsItem from '../../Components/TagsItem/TagsItem'
import postCardItems, { getPostCardItemsObject } from '../PostCards/postCardItems'
import Sidebar from '../Sidebar/Sidebar'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import './postPage.css'

const PostPage = ({
    category,
    changeCategory,
    toggleFavorite,
    inFavorites,
    addToFavoritesPage,
    removeFromFavoritesPage,
    inFavoritesPage,
    match,
    postCardItemsObject = getPostCardItemsObject(postCardItems),
}) => {

    const linkTitle = postCardItems.filter(post => post.post_Title === match.params.post_Title)

    const id = linkTitle[0].id

    return (
        <section className="page-section post-section">
            <div className="container-fluid">
                <div className="blog-row">
                    <div className="blog-content">
                        <div className="page-content">
                            <PostTop
                                id={postCardItemsObject[id].id}
                                postImg={postCardItemsObject[id].postImgBig}
                                categorieLink={postCardItemsObject[id].categorieLink}
                                postTitle={postCardItemsObject[id].postTitle}
                                changeCategory={changeCategory}
                                postDescription={postCardItemsObject[id].postDescription}
                                authorImg={postCardItemsObject[id].authorImg}
                                authorName={postCardItemsObject[id].authorName}
                                postDate={postCardItemsObject[id].postDate}
                                toggleFavorite={toggleFavorite}
                                inFavorites={inFavorites[id]}
                                addToFavoritesPage={addToFavoritesPage}
                                removeFromFavoritesPage={removeFromFavoritesPage}
                                inFavoritesPage={inFavoritesPage}
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:postCardItemsObject[id].postBody
                                }}
                            ></div>
                            <div className="tags-social">
                                <TagsItem
                                    tags = {postCardItemsObject[id].tags}
                                    changeCategory={changeCategory}
                                />     
                                <Social/>
                            </div>
                       </div>
                       <div className="prev-next-links">
                           <div className={postCardItemsObject[id-1] === undefined ? "invisible" : "prev-link"}>
                                <MiniPost
                                    postTitle={postCardItemsObject[id-1] === undefined ? null : postCardItemsObject[id-1].postTitle}
                                    post_Title={postCardItemsObject[id-1] === undefined ? null : postCardItemsObject[id-1].post_Title}
                                    postImg={postCardItemsObject[id-1] === undefined ? null : postCardItemsObject[id-1].postImg}
                                    prevNextLink={<span className="prev-post"><ArrowLeftIcon/>Preview Post</span>}
                                />
                            </div>
                            <div className={postCardItemsObject[id+1] === undefined ? "invisible" : "next-link"}>
                                <MiniPost
                                    postTitle={postCardItemsObject[id+1] === undefined ? null : postCardItemsObject[id+1].postTitle}
                                    post_Title={postCardItemsObject[id+1] === undefined ? null : postCardItemsObject[id+1].post_Title}
                                    postImg={postCardItemsObject[id+1] === undefined ? null : postCardItemsObject[id+1].postImg}
                                    prevNextLink={<span className="next-post">Next Post<ArrowRightIcon/></span>}
                                />
                           </div>
                       </div>
                       <div className="post-comments">
                            <Comments/>
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

export default PostPage