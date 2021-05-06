import React from 'react'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import "./postPagination.css"

const PostPagination = ({
    changeSlice
}) => {
    return (
        <div className="post-pagination-row">
            <ul className="pagination-list">
                <li className="pagination-item"><button onClick={() => changeSlice(0,6)}className="pagination-link">1</button></li>
                <li className="pagination-item"><button onClick={() => changeSlice(6,9)} className="pagination-link">2</button></li>
                <li className="pagination-item"><button onClick={() => changeSlice(6,9)} className="pagination-link">&#187;</button></li>
            </ul>
        </div>
    )
}

export default PostPagination