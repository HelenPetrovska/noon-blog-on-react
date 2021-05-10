import React, { useState } from 'react'
import postCommentsItems from '../../App/Main/PostPage/Comments/postCommentsItems'


import './comments.css'

const Comments = () => {

    let formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
    });

    let date = formatter.format(new Date())


    const [comments, setComments] = useState(postCommentsItems)

    const [newComments, setNewComments] = useState({
        name:"",
        text:"",
        email:"",
        website:"",
        commentDate: date,
        image:"/images/userDefault.png"
    })

    const handleNameChange = (e) => {
        setNewComments((value) => ({
            ...value,
            name:e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewComments((value) => ({
            ...value,
            text:e.target.value
        }))
    }

    const handleEmailChange = (e) => {
        setNewComments((value) => ({
            ...value,
            email:e.target.value
        }))
    }

    const handleWebsiteChange = (e) => {
        setNewComments((value) => ({
            ...value,
            website:e.target.value
        }))
    }

    const sendForm = (e) => {
        e.preventDefault();
        setComments(value => {
            return [...value, newComments]
        })
        setNewComments({
            name:"",
            text:"",
            email:"",
            website:"",
            commentDate: date,
            image:"/images/userDefault.png"
        })
    }

    return (
        <div>
            <h5>{comments.length} Comments</h5>
            <div className="comments">
                {
                    comments.map(comment => (
                        <div className="comment" key={`${comment.id}`}>
                            <div className="user-image">
                                <img src={comment.image} className="user-img" alt="user-img"/>
                            </div>
                            <div className="user-discription">
                                <div className="user-info">
                                    <div className="user-name">{comment.name}</div>
                                    <div className="dot"></div>
                                    <div className="comment-date">{comment.commentDate}</div>
                                </div>
                                <div className="comment-text">{comment.text}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <form onSubmit={sendForm} className="comments-form">
                <h5 >Leave a Reply</h5>
                <p>Your email adress will not be published, Requied fileds are marked*.</p>

                <div className="contact-form-field">
                    <textarea 
                        name="message" 
                        className="contact-form-input" id="message"
                        cols="30" rows="5" 
                        placeholder="Message*"
                        value={newComments.text}
                        onChange={handleTextChange}
                        required
                    ></textarea>
                </div>
                <div className="name-email-fields">
                    <div className="contact-form-field">
                        <input 
                            type="text" name="name" 
                            className="contact-form-input name-input" placeholder="Name*" 
                            value={newComments.name} 
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="contact-form-field email-field">
                        <input 
                            type="email" name="email" className="contact-form-input email-input" placeholder="Email*"
                            value={newComments.email} 
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                </div>
                <div className="contact-form-field">
                    <input 
                        type="text" name="website"
                        className="contact-form-input" 
                        placeholder="website"
                        value={newComments.website} 
                        onChange={handleWebsiteChange}
                    />
                </div>
                <button type="submit" name="submit" className="contact-form-btn btn">Post Comment</button>
            </form>
        </div>
    )
}

export default Comments