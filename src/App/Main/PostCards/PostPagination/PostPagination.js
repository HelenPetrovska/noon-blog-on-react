import React from 'react'
import { Link } from 'react-router-dom'

import "./postPagination.css"

const PostPagination = ({
    changeSlice
}) => {
    return (
        <div className="post-pagination-row">
            <ul className="pagination-list">
                <li className="pagination-item"><button onClick={() => changeSlice(0,6)}className="pagination-link">1</button></li>
                <li className="pagination-item"><button onClick={() => changeSlice(6,9)} className="pagination-link">2</button></li>
                <li className="pagination-item"><button onClick={() => changeSlice(6,9)} className="pagination-link"><i className="fa fa-angle-double-right" aria-hidden="true"></i></button></li>
            </ul>
        </div>
    )
}

export default PostPagination