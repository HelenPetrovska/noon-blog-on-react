import React from 'react'
import HeaderLinks from './HeaderLinks/HeaderLinks'

import "./header.css"

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header = ({
    category,
    changeCategory
}) => {
    return (
        <header className="header">
            <div className="container-fluid">
                <div className="header-row">

                    <Logo/>
                    <Menu
                        category={category}
                        changeCategory={changeCategory}
                    />
                    <HeaderLinks/>

                </div>
            </div>
        </header>
    )
}

export default Header