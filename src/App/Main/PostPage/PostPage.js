import React from 'react'
import postCardItems, { getPostCardItemsObject } from '../PostCards/postCardItems'
import Sidebar from '../Sidebar/Sidebar'

import './postPage.css'

const PostPage = ({
    match,
    postCardItemsObject = getPostCardItemsObject(postCardItems)
}) => {

    const linkTitle = postCardItems.filter(post => post.post_Title === match.params.postTitle)

    const id = linkTitle[0].id
    
    console.log(match)
    console.log(match.params.postTitle)
    console.log(linkTitle, id)

    return (
        <section className="page-section post-section">
            <div className="container-fluid">
                <div className="blog-row">
                    <div className="blog-content">
                        <div className="page-content">
                            <div className="page-image">
                                <img src={postCardItemsObject[id].postImgBig} className="page-img"  alt="post-img"/>
                            </div>  
                        </div>
                    </div>
                    <Sidebar/>
                </div>
            </div>
        </section>

    )
}

export default PostPage