import React from 'react'
import { Link } from 'react-router-dom'

import "./headerSocial.css"

const HeaderSocial = () => {
    return (
        <ul className="social-list social-list-header">
            <li className="social-item"><Link to="#" className="social-link"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
            <li className="social-item"><Link to="#" className="social-link"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
            <li className="social-item"><Link to="#" className="social-link"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
            <li className="social-item"><Link to="#" className="social-link"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
        </ul>
    )
}

export default HeaderSocial

