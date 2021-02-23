import React from 'react'

import "./postPagination.css"

const PostPagination = () => {
    return (
        <div className="post-pagination-row">
            <ul className="pagination-list">
                <li className="pagination-item"><a href="#" className="pagination-link">1</a></li>
                <li className="pagination-item"><a href="#" className="pagination-link">2</a></li>
                <li className="pagination-item"><a href="#" className="pagination-link">3</a></li>
                <li className="pagination-item"><a href="#" className="pagination-link">4</a></li>
                <li className="pagination-item"><a href="#" className="pagination-link"><i className="fa fa-angle-double-right" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    )
}

export default PostPagination