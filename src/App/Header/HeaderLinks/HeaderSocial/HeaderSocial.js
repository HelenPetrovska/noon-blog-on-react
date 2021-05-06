import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import "./headerSocial.css"

const HeaderSocial = () => {
    return (
        <ul className="social-list social-list-header">
            <li className="social-item"><Link to="#" className="social-link"><FacebookIcon style={{fontSize:20}}/></Link></li>
            <li className="social-item"><Link to="#" className="social-link"><InstagramIcon style={{fontSize:20}}/></Link></li>
            <li className="social-item"><Link to="#" className="social-link"><TwitterIcon style={{fontSize:20}}/></Link></li>
            <li className="social-item"><Link to="#" className="social-link"><YouTubeIcon style={{fontSize:20}}/></Link></li>
        </ul>
    )
}

export default HeaderSocial

