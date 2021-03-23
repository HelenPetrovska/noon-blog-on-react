import React from 'react'
import Sidebar from '../CategoryPage/Sidebar/Sidebar'

import './aboutPage.css'
import AboutImage from './about.jpg'

const AboutPage = () => {
    return (
        <section className="about-section">
            <div className="container-fluid">
                <div className="about-row">
                    <div className="page-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="blog-row">
                        <div className="blog-content">
                            <div className="about-content">
                                <div className="about-image">
                                    <img src={AboutImage} className="about-img" alt="about-img"/>
                                </div>
                                <div className="about-discription">
                                    <h6>Thank you for checking out our blog website.</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere, nemo dignissimos, in labore nostrum provident perferendis minima accusamus aliquam reprehenderit autem</p>
                                    <p>Praesentium sunt beatae libero non totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere, nemo dignissimos, in labore nostrum provident perferendis minima accusamus aliquam reprehenderit autem praesentium sunt beatae libero non totam.</p>
                                    <div className="quote">
                                        <div className="quote-icon">
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </div>
                                        <p>"My website’s kind of fun for me. I get to do drawings on that. It’s kind of fun."</p>
                                        <span>Jeff Bridges.</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien. In sit amet vulputate metus. Nullam eget rutrum nisl. Sed tincidunt lorem sed maximus interdum. Interdum malesuada fames ante ipsum primis in faucibus. Aenean scelerisque efficitur mauris nec tincidunt. cursus leo ultricies magna faucibus id.</p>
                                </div>
                                
                            </div>
                        </div>
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutPage