import React from 'react'

import CategoriesList from './CategoriesWidget/CategoriesList'
import InstaList from './InstaWidget/InstaList'
import LastPostsList from './LastPostsWidget/LastPostsList'
import TagsList from './TagsWidget/TagsList'

import './sidebar.css'



const Sidebar = ({
    changeCategory
}) => {
    return (
        <div className="sidebar-row">
            <div className="widget">
                <h5 className="widget-title">Latest Posts</h5>
                <LastPostsList/>
            </div>
            <div className="widget categories-widget">
                <h5 className="widget-title">Categories</h5>
                <CategoriesList
                    changeCategory={changeCategory}
                />
            </div>
            <div className="widget">
                <h5 className="widget-title">Instagram</h5>
                <InstaList/>
            </div>
            <div className="widget tags-widget">
                <h5 className="widget-title">Tags</h5>
                <TagsList/>
            </div>
        </div>
    )
}

export default Sidebar