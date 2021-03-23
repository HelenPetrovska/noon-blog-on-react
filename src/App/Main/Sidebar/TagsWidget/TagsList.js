import React from 'react'
import {Link} from 'react-router-dom'

import './tagsList.css'

const TagsList = () => {
    return (
        <div className="widget-tags-list">
            <div className="tag-item">
                <Link to="/tag/travel" className="tag-link">Travel</Link>
            </div>
            <div className="tag-item">
                <a href="#" className="tag-link">Nature</a>
            </div>
            <div className="tag-item">
                <a href="#" className="tag-link">Tips</a>   
            </div>
            <div className="tag-item">
                <a href="#" className="tag-link">Forest</a>
            </div>
            <div className="tag-item">
                <a href="#" className="tag-link">Beach</a>
            </div>
            <div className="tag-item">
                <a href="#" className="tag-link">Fashion</a>
            </div>
            <div className="tag-item">
                <a href="#" className="tag-link">Livestyle</a>
            </div>
            <div className="tag-item">
                <a href="#" className="tag-link">Healty</a>
            </div>
            <div className="tag-item">
                <a href="#" className="tag-link">Food</a>
            </div>
            <div className="tag-item">
                <a href="#" className="tag-link">Breakfast</a>
            </div>
        </div>
    )
}

export default TagsList