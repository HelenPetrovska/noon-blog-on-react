import React from 'react'
import Index from '../../Components/ScrollUpBtn/ScrollUpBtn'
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
            <Index/>
        </section>

    )
}

export default AuthorPage