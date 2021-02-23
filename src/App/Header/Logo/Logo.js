import React from 'react'
import logo from './logo.png'

import "./logo.css"


const Logo = () => {
    return (
        <div className ="logo">
            <a href="/" className="logo-link"><img src={logo} alt="logo-img" className="logo-img"/></a>
        </div>
    )
}

export default Logo