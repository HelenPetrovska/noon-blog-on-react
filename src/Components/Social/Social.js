import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import PinterestIcon from '@material-ui/icons/Pinterest'

import './social.css'

const Social = () => {
    return (
        <div className="social">
            <ul className="social-list">
                <li className="social-item"><Link to="#" className="social-link facebook-official-link"><FacebookIcon style={{fontSize:17}}/></Link></li>
                <li className="social-item"><Link to="#" className="social-link instagram-link"><InstagramIcon style={{fontSize:17}}/></Link></li>
                <li className="social-item"><Link to="#" className="social-link twitter-link"><TwitterIcon style={{fontSize:17}}/></Link></li>
                <li className="social-item"><Link to="#" className="social-link youtube-play-link"><YouTubeIcon style={{fontSize:17}}/></Link></li>
                <li className="social-item"><Link to="#" className="social-link pinterest-link"><PinterestIcon style={{fontSize:17}}/></Link></li>
            </ul>
        </div>
    )
}

export default Social