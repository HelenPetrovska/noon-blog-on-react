import React from 'react'
import {Link} from 'react-router-dom'

import './tagsItem.css'


const TagsItem = ({
    tags,
    changeCategory
}) => {

    return (
        <div className="tags-list">
            {
                tags.map(tag => (
                        <div className="tag-item">
                            <Link to={`/tag/${tag}`} onClick = {() => changeCategory(tag)} className="tag-link">{tag}</Link>
                        </div>
                    )
                )
            }
        </div>
    )

}

export default TagsItem