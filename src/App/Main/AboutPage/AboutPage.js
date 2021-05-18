import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Index from '../../../Components/ScrollUpBtn/ScrollUpBtn'

import './aboutPage.css'
import AboutImage from './about.jpg'

const AboutPage = ({
    changeCategory
}) => {
    return (
        <section className="page-section">
            <div className="container-fluid">
                <div className="page-title">
                    <h5>About Us</h5>
                </div>
                <div className="blog-row">
                    <div className="blog-content">
                        <div className="page-content">
                            <div className="page-image">
                                <img src={AboutImage} className="page-img" alt="page-img"/>
                            </div>
                            <div className="page-description">
                                <h6>Thank you for checking out our blog website.</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere, nemo dignissimos, in labore nostrum provident perferendis minima accusamus aliquam reprehenderit autem</p>
                                <p>Praesentium sunt beatae libero non totam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facere, nemo dignissimos, in labore nostrum provident perferendis minima accusamus aliquam reprehenderit autem praesentium sunt beatae libero non totam.</p>
                                <div className="quote">
                                    <div className="quote-icon">&#8221;</div>
                                    <p>"My website’s kind of fun for me. I get to do drawings on that. It’s kind of fun."</p>
                                    <span>Jeff Bridges.</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada malesuada metus ut placerat. Cras a porttitor quam, eget ornare sapien. In sit amet vulputate metus. Nullam eget rutrum nisl. Sed tincidunt lorem sed maximus interdum. Interdum malesuada fames ante ipsum primis in faucibus. Aenean scelerisque efficitur mauris nec tincidunt. cursus leo ultricies magna faucibus id.</p>
                            </div>
                        </div>
                    </div>
                    <Sidebar
                        changeCategory={changeCategory}
                    />
                </div>
            </div>
            <Index/>
        </section>

    )
}

export default AboutPage