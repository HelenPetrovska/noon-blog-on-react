import React from 'react'

import PostCardsFilter from './PostCardsFilter/PostCardsFilter'
import CategoryTitle from './CategoryTitle/CategoryTitle'
import Sidebar from '../Sidebar/Sidebar'

import './categoryPage.css'

const CategoryPage = ({
    category,
    changeCategory,
    match
}) => {
    console.log(match)
    return (
        <section className="category-section">
            <div className="container-fluid">
                <CategoryTitle
                    category={category}
                />
                <div className="blog-row">
                    <div className="blog-content">
                        <PostCardsFilter
                            category={category}
                            changeCategory={changeCategory}
                        />
                    </div>
                    <Sidebar
                        changeCategory={changeCategory}
                    />
                </div>
            </div> 
        </section>
    )
}

export default CategoryPage