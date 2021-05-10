import { keys } from 'lodash'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import "./menu.css"

class Menu extends Component {

    state = {
        mobileMenu: false,
        submenu: false,
    }

    toggleMobileMenu = () => {
        this.setState((prevState) => {
            return {
                mobileMenu: !prevState.mobileMenu
            }
        })
    }

    toggleSubmenu = () => {
        this.setState((prevState) => {
            return {
                submenu: !prevState.submenu
            }
        })
    }
    hideSubmenu = () => {
        this.setState((prevState) => {
            return {
                submenu:false
            }
        })
    }

    render() {

        const {
            changeCategory,
            inFavoritesPage
        } = this.props

        return (
            <div className="menu">
                <nav className= {this.state.mobileMenu ? "nav navigation active-menu" : "nav navigation hidden-menu"}>
                    <ul className="menu-list">
                        <li className="menu-item"><Link to="/" className="menu-link menu-link-active" onClick={() => this.toggleMobileMenu()}>Home</Link></li>
                        <li className="menu-item categories-item categories-item-mobile">
                            <Link to="/" onClick = {() => this.toggleSubmenu()} className= "menu-link categories-link">Categories</Link>
                            <ul className = {this.state.submenu ? "submenu-list show" : "submenu-list hide"}>
                                <li><Link to="/category/livestyle" onClick={() => (changeCategory('livestyle'), this.toggleMobileMenu())} className="menu-link submenu-link">Livestyle</Link></li>
                                <li><Link to="/category/travel" onClick={() => (changeCategory('travel'), this.toggleMobileMenu())} className="menu-link submenu-link">Travel</Link></li>
                                <li><Link to="/category/food" onClick={() => (changeCategory('food'), this.toggleMobileMenu())} className="menu-link submenu-link">Food</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item categories-item categories-item-desktop">
                            <div className= "menu-link categories-link">Categories</div>
                            <ul className = "submenu-list">
                                <li><Link to="/category/livestyle" onClick={() => (changeCategory('livestyle'), this.toggleMobileMenu())} className="menu-link submenu-link">Livestyle</Link></li>
                                <li><Link to="/category/travel" onClick={() => (changeCategory('travel'), this.toggleMobileMenu())} className="menu-link submenu-link">Travel</Link></li>
                                <li><Link to="/category/food" onClick={() => (changeCategory('food'), this.toggleMobileMenu())} className="menu-link submenu-link">Food</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item"><Link to="/about" onClick={() => this.toggleMobileMenu()} className="menu-link">About</Link></li>
                        <li className="menu-item"><Link to="/contact" onClick={() => this.toggleMobileMenu()} className="menu-link">Contact</Link></li>
                        <li className="menu-item"><Link to="/favorites" onClick={() => this.toggleMobileMenu()} className="menu-link favorites-link">Favorites<span className={(keys(inFavoritesPage).length) === 0 ? "noliked heart-menu" : "liked heart-menu"}></span>
                        <span className="countFavorite">
                            {
                                keys(inFavoritesPage).length
                            }
                        </span></Link></li>
                    </ul>
                </nav>
                <div className="nav-mobile-menu" onClick={() => (this.toggleMobileMenu(), this.hideSubmenu())}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}

export default Menu