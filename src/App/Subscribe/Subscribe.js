import React from 'react'

import "./subscribe.css"


const Subscribe = () => {
    return (
        <section className="subscribe">
        <div className="container-fluid">
            <div className="subscribe-row">
                <h5 className="subscribe-title">Subscribe to our Newslatter</h5>
                <p className="subscribe-text">Sign up for free and be the first to get notified about new posts.</p>
                <form action="#" className="subscribe-form">
                    <div className="subscribe-field">
                        <input type="email" className="subscribe-input" placeholder="Your email adress"/>
                    </div>
                    <button className="btn subscribe-btn">Subscribe</button>
                </form>
                <ul className="subscribe-list">
                    <li className="subscribe-item"><a href="#" className="subscribe-link"><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</a></li>
                    <li className="subscribe-item"><a href="#" className="subscribe-link"><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
                    <li className="subscribe-item"><a href="#" className="subscribe-link"><i className="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
                    <li className="subscribe-item"><a href="#" className="subscribe-link"><i className="fa fa-youtube-play" aria-hidden="true"></i>Youtube</a></li>
                </ul>
            </div>
        </div>
    </section>

    )
}

export default Subscribe