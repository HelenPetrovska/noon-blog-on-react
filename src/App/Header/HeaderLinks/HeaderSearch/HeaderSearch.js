import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

import "./headerSearch.css"

const HeaderSearch = ({
    toggleModal,
    modal
}) => {
    return (
        <div className="header-search">
            <button onClick={() => toggleModal()} className="btn header-search-btn"><SearchIcon style={{fontSize:20}}/></button>
        </div>

    )
}

export default HeaderSearch

