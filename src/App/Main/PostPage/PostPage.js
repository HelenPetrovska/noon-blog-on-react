import React from 'react'
import { Link } from 'react-router-dom'
import MiniPost from '../../Components/MiniPost/MiniPost'
import PostTop from '../../Components/PostTop/PostTop'
import Social from '../../Components/Social/Social'
import TagsItem from '../../Components/TagsItem/TagsItem'
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
                                    prevNextLink={<span className="prev-post"><i class="fa fa-long-arrow-left" aria-hidden="true"></i>Preview Post</span>}
                                />
                            </div>
                            <div className={postCardItemsObject[id+1] === undefined ? "invisible" : "next-link"}>
                                <MiniPost
                                    postTitle={postCardItemsObject[id+1] === undefined ? null : postCardItemsObject[id+1].postTitle}
                                    post_Title={postCardItemsObject[id+1] === undefined ? null : postCardItemsObject[id+1].post_Title}
                                    postImg={postCardItemsObject[id+1] === undefined ? null : postCardItemsObject[id+1].postImg}
                                    prevNextLink={<span className="next-post">Next Post<i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>}
                                />
                           </div>
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

export default PostPage