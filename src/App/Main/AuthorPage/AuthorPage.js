import React from 'react'
import Index from '../../../Components/ScrollUpBtn/ScrollUpBtn'
import PostCards from '../PostCards/PostCards'
import AuthorWidget from '../Sidebar/AuthorWidget/AuthorWidget'


import './authorPage.css'

const AuthorPage = ({
    changeSlice,
    sliceTo,
    sliceFrom
}) => {
    return (
        <section className="page-section author-section">
            <div className="container-fluid">
                <AuthorWidget/>
                <PostCards
                    changeSlice={changeSlice}
                    sliceTo={sliceTo}
                    sliceFrom={sliceFrom}
                />
            </div>
        </section>

    )
}

export default AuthorPage