import React from 'react'

import './contactForm.css'

const ContactForm = () => {
    return (
        <form action="#" className="contact-form">
            <div className="contact-form-field">
                <input type="text" name="name" className="contact-form-input" placeholder="Your Name*" required/>
            </div>
            <div className="contact-form-field">
                <input type="email" name="email" className="contact-form-input" placeholder="Your Email*" required/>
            </div>
            <div className="contact-form-field">
                <input type="text" name="subject"  className="contact-form-input" placeholder="Your Subject*" required/>
            </div>
            <div className="contact-form-field">
                <textarea name="message" className="contact-form-input" id="message" cols="30" rows="5" placeholder="Your Message*" required></textarea>
            </div>
            <button type="submit" name="submit" className="contact-form-btn btn">Send Message</button>
        </form>
    )
}

export default ContactForm