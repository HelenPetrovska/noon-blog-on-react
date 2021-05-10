import React from 'react'
import TagsItem from '../../../../Components/TagsItem/TagsItem'
import postCardItems from '../../PostCards/postCardItems'

const TagsList = ({
    changeCategory
}) => {

    const tags = [...new Set(postCardItems.map((post)=>post.tags).flat())]

    // console.log (postCardItems.map((post)=>post.tags))
    // console.log (postCardItems.map((post)=>post.tags).flat())
    // console.log (tags)

    return (
            <TagsItem
                tags={tags}
                changeCategory={changeCategory}
            />
    )
}

export default TagsList