import React from 'react'

import PostCardsFilter from './PostCardsFilter/PostCardsFilter'
import CategoryTitle from './CategoryTitle/CategoryTitle'
import Sidebar from '../Sidebar/Sidebar'

import './categoryPage.css'

const CategoryPage = ({
    category,
    changeCategory
}) => {
    return (
        <section className="category-section">
            <div className="container-fluid">
                <div className="category-row">
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
            </div>
        </section>
    )
}

export default CategoryPage