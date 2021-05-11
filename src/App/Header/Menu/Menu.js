import { keys } from 'lodash'
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import "./menu.css"

const Menu = ({
    changeCategory,
    isLiked,
    toggleMobileMenu,
    toggleSubmenu,
    hideSubmenu,
    mobileMenu,
    submenu
}) => {
    return (
        <div className="menu">
            <nav className= {mobileMenu ? "nav navigation active-menu" : "nav navigation hidden-menu"}>
                <ul className="menu-list">
                    <li className="menu-item"><Link to="/" className="menu-link menu-link-active" onClick={() => toggleMobileMenu()}>Home</Link></li>
                    <li className="menu-item categories-item categories-item-mobile">
                        <Link to="/" onClick = {() => toggleSubmenu()} className= "menu-link categories-link">Categories</Link>
                        <ul className = {submenu ? "submenu-list show" : "submenu-list hide"}>
                            <li><Link to="/category/livestyle" onClick={() => (changeCategory('livestyle'), toggleMobileMenu())} className="menu-link submenu-link">Livestyle</Link></li>
                            <li><Link to="/category/travel" onClick={() => (changeCategory('travel'), toggleMobileMenu())} className="menu-link submenu-link">Travel</Link></li>
                            <li><Link to="/category/food" onClick={() => (changeCategory('food'), toggleMobileMenu())} className="menu-link submenu-link">Food</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item categories-item categories-item-desktop">
                        <div className= "menu-link categories-link">Categories</div>
                        <ul className = "submenu-list">
                            <li><Link to="/category/livestyle" onClick={() => (changeCategory('livestyle'), toggleMobileMenu())} className="menu-link submenu-link">Livestyle</Link></li>
                            <li><Link to="/category/travel" onClick={() => (changeCategory('travel'), toggleMobileMenu())} className="menu-link submenu-link">Travel</Link></li>
                            <li><Link to="/category/food" onClick={() => (changeCategory('food'), toggleMobileMenu())} className="menu-link submenu-link">Food</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item"><Link to="/about" onClick={() => toggleMobileMenu()} className="menu-link">About</Link></li>
                    <li className="menu-item"><Link to="/contact" onClick={() => toggleMobileMenu()} className="menu-link">Contact</Link></li>
                    <li className="menu-item"><Link to="/favorites" onClick={() => toggleMobileMenu()} className="menu-link favorites-link">Favorites<span className={(keys(isLiked).length) === 0 ? "noliked heart-menu" : "liked heart-menu"}></span>
                    <span className="countFavorite">
                        {
                            (keys(isLiked).filter(postId =>isLiked[postId]===true)).length
                        }
                    </span></Link></li>
                </ul>
            </nav>
            <div className="nav-mobile-menu" onClick={() => (toggleMobileMenu(), hideSubmenu())}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    isLiked:state.postLikeState
})

export default connect(
    mapState
)(Menu)