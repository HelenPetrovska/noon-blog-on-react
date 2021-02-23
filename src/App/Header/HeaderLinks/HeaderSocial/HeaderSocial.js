import React from 'react'

import "./headerSocial.css"

const HeaderSocial = () => {
    return (
        <ul className="social-list social-list-header">
            <li className="social-item"><a href="#" className="social-link"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li className="social-item"><a href="#" className="social-link"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li className="social-item"><a href="#" className="social-link"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li className="social-item"><a href="#" className="social-link"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
        </ul>
    )
}

export default HeaderSocial

