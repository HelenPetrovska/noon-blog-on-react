import React from 'react'
import HeaderSocial from './HeaderSocial/HeaderSocial'
import HeaderSearch from './HeaderSearch/HeaderSearch'


import "./headerLinks.css"


const HeaderLinks = () => {
    return (
        <div className="header-links">
            <HeaderSocial/>
            <HeaderSearch/>
        </div>
    )
}

export default HeaderLinks