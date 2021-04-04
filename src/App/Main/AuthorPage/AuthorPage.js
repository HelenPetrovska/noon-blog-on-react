import React from 'react'
import { Link } from 'react-router-dom'
import PostCards from '../PostCards/PostCards'
import AuthorWidget from '../Sidebar/AuthorWidget/AuthorWidget'


import './authorPage.css'

const AuthorPage = () => {
    return (
        <section className="page-section author-section">
            <div className="container-fluid">
                <AuthorWidget/>
                <PostCards/>
            </div>
        </section>

    )
}

export default AuthorPage