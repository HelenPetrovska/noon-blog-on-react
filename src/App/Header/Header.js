import React from 'react'
import HeaderLinks from './HeaderLinks/HeaderLinks'

import "./header.css"

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header = ({
    category,
    changeCategory,
    toggleModal,
    modal
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