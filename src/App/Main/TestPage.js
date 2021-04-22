import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import postCardItems from './PostCards/postCardItems'
import PostPagination from './PostCards/PostPagination/PostPagination'
import TestTop from './TestTop'

class TestPage extends Component {

    render () {

        return (
            <div>
                {
                    postCardItems.map(({
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
                            <div className="container-fluid">
                                <div className="post-cards-row">
                                    <TestTop
                                        id={id}
                                        postImg={postImg}
                                        postTitle={postTitle}
                                        post_Title={post_Title}
                                        postDescription={postDescription}
                                        authorImg={authorImg}
                                        authorName={authorName}
                                        postDate={postDate}
                                    />
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
    }
}

export default TestPage