import React from 'react'
import MiniPost from '../../../Components/MiniPost/MiniPost'
import postCardItems from '../../PostCards/postCardItems'

import './lastPostsList.css'

const LastPostsList = () => {
    return (
        <div className="last-posts-list">
            {
                postCardItems.slice(0,4).map(({
                    id,
                    postImg,
                    postTitle,
                    post_Title,
                    postDate,
                    nb
                })=> {
                    return (
                        <MiniPost
                            key={id}
                            postImg={postImg}
                            postTitle={postTitle}
                            post_Title={post_Title}
                            postDate={postDate}
                            nb={nb}
                        />
                    )
                })
            }
        </div>

    )
}

export default LastPostsList