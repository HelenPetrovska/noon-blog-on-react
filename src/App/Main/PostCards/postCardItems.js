import React from 'react'


const postCardItems = [
    {
        id:1,
        postImg:"/images/post1.jpg",
        postImgBig:"/images/postBig1.jpg",
        categorieLink:"livestyle",
        postTitle:"How to Choose Outfits for Work for woman and men",
        post_Title:"How-to-Choose-Outfits-for-Work-for-woman-and-men",
        postText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
        authorImg:"/images/author.jpg",
        authorName:"David Smith",
        postDate:"January 10, 2021",
        nb:"1"
    },
    {
        id:2,
        postImg:"/images/post2.jpg",
        postImgBig:"/images/postBig2.jpg",
        categorieLink:"travel",
        postTitle:"10 Easy Tips for You to Traveling Around the World!",
        post_Title:"10-Easy-Tips-for-You-to-Traveling-Around-the-World!",
        postText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
        authorImg:"/images/author.jpg",
        authorName:"David Smith",
        postDate:"January 12, 2021",
        nb:"2"
    },
    {
        id:3,
        postImg:"/images/post3.jpg",
        postImgBig:"/images/postBig3.jpg",
        categorieLink:"food",
        postTitle:"Enjoy My Favourite Molten Chocolate Cake",
        postText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
        authorImg:"/images/author.jpg",
        authorName:"David Smith",
        postDate:"January 15, 2021",
        nb:"3"
    },
    {
        id:4,
        postImg:"/images/post4.jpg",
        postImgBig:"/images/postBig4.jpg",
        sliderImg:"/images/slider4.jpg",
        categorieLink:"travel",
        postTitle:"Top 10 Forests That Every Nature Lover Must Visit",
        postText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
        authorImg:"/images/author.jpg",
        authorName:"David Smith",
        postDate:"January 17, 2021",
        nb:"4",
    },
    {
        id:5,
        postImg:"/images/post5.jpg",
        postImgBig:"/images/postBig5.jpg",
        sliderImg:"/images/slider6.jpg",
        categorieLink:"food",
        postTitle:"How to Prepare a Royal Healthy Breakfast at Home",
        postText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
        authorImg:"/images/author.jpg",
        authorName:"David Smith",
        postDate:"January 19, 2021",
        nb:"5"
    },
    {
        id:6,
        postImg:"/images/post6.jpg",
        postImgBig:"/images/postBig6.jpg",
        categorieLink:"livestyle",
        postTitle:"20+ Cute Girly Outfits to Buy for the First Day of Winter",
        postText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
        authorImg:"/images/author.jpg",
        authorName:"David Smith",
        postDate:"January 21, 2021",
        nb:"6"
    },
    {
        id:7,
        postImg:"/images/post7.jpg",
        postImgBig:"/images/postBig7.jpg",
        sliderImg:"/images/slider3.jpg",
        categorieLink:"livestyle",
        postTitle:"How to Wear when You Travel to Montain?",
        postText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
        authorImg:"/images/author.jpg",
        authorName:"David Smith",
        postDate:"January 23, 2021",
        nb:"7"
    },
    {
        id:8,
        postImg:"/images/post8.jpg",
        postImgBig:"/images/postBig8.jpg",
        categorieLink:"food",
        postTitle:"How to Make Morroco's Pancake in Five Steps?",
        postText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
        authorImg:"/images/author.jpg",
        authorName:"David Smith",
        postDate:"January 25, 2021",
        nb:"8"
    },
    {
        id:9,
        postImg:"/images/post9.jpg",
        postImgBig:"/images/postBig9.jpg",
        categorieLink:"travel",
        postTitle:"10 Best and Most Beautiful Places to Visit in Italy",
        postText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
        authorImg:"/images/author.jpg",
        authorName:"David Smith",
        postDate:"January 27, 2021",
        nb:"9"
    }
]

export const getPostCardItemsObject = array => array.reduce((obj,post) => ({
    ...obj,
    [post.id]:post
}), {})

export default postCardItems
