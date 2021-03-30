import React from 'react'

import "./headerSearch.css"

const HeaderSearch = ({
    toggleModal,
    modal
}) => {
    return (
        <div className="header-search">
            <button onClick={() => toggleModal()} className="btn header-search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>

    )
}

export default HeaderSearch

