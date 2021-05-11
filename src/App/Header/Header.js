import React from 'react'
import HeaderLinks from './HeaderLinks/HeaderLinks'

import "./header.css"

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header = ({
    category,
    changeCategory,
    toggleModal,
    modal,
    toggleMobileMenu,
    toggleSubmenu,
    hideSubmenu,
    mobileMenu,
    submenu
}) => {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="header-row">

                    <Logo/>
                    <Menu
                        category={category}
                        changeCategory={changeCategory}
                        toggleMobileMenu={toggleMobileMenu}
                        toggleSubmenu={toggleSubmenu}
                        hideSubmenu={hideSubmenu}  
                        mobileMenu={mobileMenu}
                        submenu={submenu}
                    />
                    <HeaderLinks
                        toggleModal={toggleModal}
                        modal={modal}
                    />

                </div>
            </div>
        </header>
    )
}

export default Header