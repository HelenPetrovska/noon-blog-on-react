import React from 'react'
import {Link} from 'react-router-dom'

import './categoryTitle.css'

const CategoryTitle = ({
    category
}) => {
    return (
        <div className="category-title-row">
            <div className="category-page-title">
                <div className="breadcrumb">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><Link to="/" className="breadcrumb-link">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/" className="breadcrumb-link">{category}</Link></li>
                    </ul>
                </div>
                <h2 className="category-title">Category: <span>{category}</span></h2>
                <p className="category-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit
                </p>
            </div>
        </div>
    )
}

export default CategoryTitle