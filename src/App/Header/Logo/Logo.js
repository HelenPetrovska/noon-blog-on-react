import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

import "./logo.css"


const Logo = () => {
    return (
        <div className ="logo">
            <Link to="/" className="logo-link"><img src={logo} alt="logo-img" className="logo-img"/></Link>
        </div>
    )
}

export default Logo