import React from 'react'

import "./menu.css"

const Menu = () => {
    return (
        <div className="menu">
            <nav className="nav navigation hidden-menu">
                <ul className="menu-list">
                    <li className="menu-item"><a href="#" className="menu-link menu-link-active">Home</a></li>
                    <li className="menu-item categories-item">
                        <a href="#" className="menu-link categories-link">Categories</a>
                        <ul className="submenu-list">
                            <li><a href="#" className="menu-link submenu-link">Livestyle</a></li>
                            <li><a href="#" className="menu-link submenu-link">Travel</a></li>
                            <li><a href="#" className="menu-link submenu-link">Food</a></li>
                        </ul>
                    </li>
                    <li className="menu-item"><a href="#" className="menu-link">About</a></li>
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