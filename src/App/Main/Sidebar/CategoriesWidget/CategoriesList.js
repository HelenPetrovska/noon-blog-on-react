import React from 'react'
import {Link} from 'react-router-dom'

import './categoriesList.css'


const CategoriesList = ({
    changeCategory
}) => {
    return (
        <div className="categories-widget-list">
            <div className="categorie-widget-item">
                <Link to="/category/livestyle" onClick={() => changeCategory('livestyle')} className="categorie-link">Livestyle</Link>
                <span className="categorie-count">5 Posts</span>
            </div>
            <div className="categorie-widget-item">
                <Link to="/category/travel" onClick={() => changeCategory('travel')} className="categorie-link">Travel</Link>
                <span className="categorie-count">7 Posts</span>
            </div>
            <div className="categorie-widget-item">
                <Link to="/category/food" onClick={() => changeCategory('food')} className="categorie-link">Food</Link>
                <span className="categorie-count">9 Posts</span>
            </div>
        </div>
    )
}

export default CategoriesList