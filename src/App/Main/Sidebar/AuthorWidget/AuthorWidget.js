import React from 'react'
import { Link } from 'react-router-dom'

import AuthorImage from './author.jpg'

import './authorWidget.css'

const AuthorWidget = () => {
    return (
        <div className="author-list">
            <Link to="/author" className="author-link">
                <img src={AuthorImage} className="author-img" alt="author-img"/>
            </Link>
            <h6 className="author-title">Hi, I'm David Smith</h6>
            <div className="categorie-link">9 Articles</div>
            <p className="author-discription">I'm David Smith, husband and father , I love Photography,travel and nature. I'm working as a writer and blogger with experience of 5 years until now.</p>
            <div className="author-social">
                <ul className="social-list">
                    <li className="social-item"><Link to="#" className="social-link facebook-official-link"><i className="fa fa-facebook-official" aria-hidden="true"></i></Link></li>
                    <li className="social-item"><Link to="#" className="social-link instagram-link"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    <li className="social-item"><Link to="#" className="social-link twitter-link"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li className="social-item"><Link to="#" className="social-link youtube-play-link"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
                    <li className="social-item"><Link to="#" className="social-link pinterest-link"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default AuthorWidget