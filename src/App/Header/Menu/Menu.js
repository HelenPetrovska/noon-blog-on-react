import React from 'react'
import {Link} from 'react-router-dom'

import "./menu.css"

const Menu = ({
    category,
    changeCategory
}) => {
    return (
        <div className="menu">
            <nav className="nav navigation hidden-menu">
                <ul className="menu-list">
                    <li className="menu-item"><Link to="/" className="menu-link menu-link-active">Home</Link></li>
                    <li className="menu-item categories-item">
                        <a href="#" className="menu-link categories-link">Categories</a>
                        <ul className="submenu-list">
                            <li><Link to="/category/livestyle" onClick={() => changeCategory('livestyle')} className="menu-link submenu-link">Livestyle</Link></li>
                            <li><Link to="/category/travel" onClick={() => changeCategory('travel')} className="menu-link submenu-link">Travel</Link></li>
                            <li><Link to="/category/food" onClick={() => changeCategory('food')} className="menu-link submenu-link">Food</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item"><Link to="/about" className="menu-link">About</Link></li>
                    <li className="menu-item"><a href="#" className="menu-link">Contact</a></li>
                </ul>
            </nav>
            <div className="nav-mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Menu