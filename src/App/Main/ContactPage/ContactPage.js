import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

import ContactImage from './contact-img.jpg'
import ContactForm from './ContactForm/ContactForm'

const ContactPage = () => {
    return (
        <section className="page-section">
            <div className="container-fluid">
                <div className="page-title">
                    <h2>Contact Us</h2>
                </div>
                <div className="blog-row">
                    <div className="blog-content">
                        <div className="page-content">
                            <div className="page-image">
                                <img src={ContactImage} className="page-img" alt="page-img"/>
                            </div>
                            <div className="page-description">
                                <h6>Feel free to contact any time.</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repudiandae.</p>
                            </div>
                            <div className="contact-us">
                                    <ContactForm/>
                            </div>
                        </div>    
                    </div>
                    <Sidebar/>
                </div>
            </div>
        </section>
    )
}

export default ContactPage