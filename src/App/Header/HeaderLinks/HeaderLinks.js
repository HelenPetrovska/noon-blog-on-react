import React from 'react'
import HeaderSocial from './HeaderSocial/HeaderSocial'
import HeaderSearch from './HeaderSearch/HeaderSearch'


import "./headerLinks.css"


const HeaderLinks = ({
    toggleModal,
    modal

}) => {
    return (
        <div className="header-links">
            <HeaderSocial/>
            <HeaderSearch
                toggleModal={toggleModal}
                modal={modal}
            />
        </div>
    )
}

export default HeaderLinks