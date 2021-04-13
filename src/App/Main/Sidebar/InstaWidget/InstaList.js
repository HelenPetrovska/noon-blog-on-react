import React from 'react'
import {Link} from 'react-router-dom'

import './instaList.css'

import insta1 from './insta1.jpg'
import insta2 from './insta2.jpg'
import insta3 from './insta3.jpg'
import insta4 from './insta4.jpg'
import insta5 from './insta5.jpg'
import insta6 from './insta6.jpg'


const InstaList = () => {
    return (
        <div className="insta-widget-list">
            <div className="insta-widget-item">
                <Link to="#" className="insta-widget-link">
                    <img src={insta1} className="insta-img" alt="insta-img"/>
                </Link>
            </div>
            <div className="insta-widget-item">
                <Link to="#" className="insta-widget-link">
                    <img src={insta2} className="insta-img" alt="insta-img"/>
                </Link>
            </div>
            <div className="insta-widget-item">
                <Link to="#" className="insta-widget-link">
                    <img src={insta3} className="insta-img" alt="insta-img"/>
                </Link>
            </div>
            <div className="insta-widget-item">
                <Link to="#" className="insta-widget-link">
                    <img src={insta4} className="insta-img" alt="insta-img"/>
                </Link>
            </div>
            <div className="insta-widget-item">
                <Link to="#" className="insta-widget-link">
                    <img src={insta5} className="insta-img" alt="insta-img"/>
                </Link>
            </div>
            <div className="insta-widget-item">
                <Link to="#" className="insta-widget-link">
                    <img src={insta6} className="insta-img" alt="insta-img"/>
                </Link>
            </div>
        </div>
    )
}

export default InstaList