import React from 'react'

import postCardItems from '../../../PostCards/postCardItems'
import LastPost from './LastPost'

const LastPostsList = () => {
    return (
        <div className="last-posts-list">
            {
                postCardItems.slice(0,4).map(({
                    id,
                    postImg,
                    postTitle,
                    postDate,
                    nb
                })=> {
                    return (
                        <LastPost
                            key={id}
                            postImg={postImg}
                            postTitle={postTitle}
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