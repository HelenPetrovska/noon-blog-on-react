import React from 'react'
import { Link } from 'react-router-dom'
import Social from '../../../Components/Social/Social'

import AuthorImage from './author.jpg'

import './authorWidget.css'

const AuthorWidget = () => {
    return (
        <div className="author-list">
            <Link to="/author" className="author-link">
                <img src={AuthorImage} className="author-img" alt="author-img"/>
            </Link>
            <h6 className="author-title">Hi, I'm David Smith</h6>
            <div className="categorie-link author-categorie-link">9 Articles</div>
            <p className="author-discription">I'm David Smith, husband and father , I love Photography,travel and nature. I'm working as a writer and blogger with experience of 5 years until now.</p>
            <Social/>
        </div>
    )
}

export default AuthorWidget