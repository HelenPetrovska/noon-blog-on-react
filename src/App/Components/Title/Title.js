import React from 'react'
import {Link} from 'react-router-dom'

import './title.css'

const Title = ({
    title
}) => {
    return (
        <div className="title-row">
            <div className="title-body">
                <div className="breadcrumb">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><Link to="/" className="breadcrumb-link">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/" className="breadcrumb-link">{title}</Link></li>
                    </ul>
                </div>
                <h3 className="title">Category: <span>{title}</span></h3>
                <p className="title-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit
                </p>
            </div>
        </div>
    )
}

export default Title