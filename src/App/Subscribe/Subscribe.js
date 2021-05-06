import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form/Form'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

import "./subscribe.css"


const Subscribe = () => {
    return (
        <section className="subscribe">
        <div className="container-fluid">
            <div className="subscribe-row">
                <h5 className="subscribe-title">Subscribe to our Newslatter</h5>
                <p className="subscribe-text">Sign up for free and be the first to get notified about new posts.</p>
                <Form/>
                <ul className="subscribe-list">
                    <li className="subscribe-item"><Link to="/" className="subscribe-link"><FacebookIcon style={{fontSize:18, marginRight:7}}/>Facebook</Link></li>
                    <li className="subscribe-item"><Link to="/" className="subscribe-link"><TwitterIcon style={{fontSize:18, marginRight:7}}/>Twitter</Link></li>
                    <li className="subscribe-item"><Link to="/" className="subscribe-link"><InstagramIcon style={{fontSize:18, marginRight:7}}/>Instagram</Link></li>
                    <li className="subscribe-item"><Link to="/" className="subscribe-link"><YouTubeIcon style={{fontSize:18, marginRight:7}}/>Youtube</Link></li>
                </ul>
            </div>
        </div>
    </section>

    )
}

export default Subscribe