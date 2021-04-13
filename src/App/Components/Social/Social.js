import React from 'react'
import { Link } from 'react-router-dom'

import './social.css'

const Social = () => {
    return (
        <div className="social">
            <ul className="social-list">
                <li className="social-item"><Link to="#" className="social-link facebook-official-link"><i className="fa fa-facebook-official" aria-hidden="true"></i></Link></li>
                <li className="social-item"><Link to="#" className="social-link instagram-link"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                <li className="social-item"><Link to="#" className="social-link twitter-link"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                <li className="social-item"><Link to="#" className="social-link youtube-play-link"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
                <li className="social-item"><Link to="#" className="social-link pinterest-link"><i className="fa fa-pinterest" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
    )
}

export default Social