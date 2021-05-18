import React from 'react'

const postCommentsItems = [
    {
        id:1,
        image:"./images/user1.jpg",
        commentDate:"January 27, 2021",
        name: "Mohammed Ali",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique!"
    },
    {
        id:2,
        image:"./images/user2.jpg",
        commentDate:"January 27, 2021",
        name:"Simon Albert",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique!"          
    },
    {
        id:3,
        image:"./images/user3.jpg",
        commentDate:"January 27, 2021",
        name:"Adam Bobly",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique!"          
    }
]

export const getPostCommentsItemsObject = array => array.reduce((obj,comment) => ({
    ...obj,
    [comment.id]:comment
}), {})

export default postCommentsItems


