import React from 'react'

import PostCardsFilter from './PostCardsFilter/PostCardsFilter'
import Sidebar from '../Sidebar/Sidebar'
import Title from '../../../Components/Title/Title'
import Index from '../../../Components/ScrollUpBtn/ScrollUpBtn'

import './categoryPage.css'

const CategoryPage = ({
    category,
    changeCategory,
}) => {

    return (
        <section className="category-section">
            <div className="container-fluid">
                <Title
                    namePage={"Category: "}
                    title={category}
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