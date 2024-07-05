import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col1">
                        <a href="index.html">
                            <h1 className="text-white">Rock<span className="text-secondary">Drills</span></h1>
                        </a>
                        <p className="description">RockDrills Borewells Pvt Ltd - Expert in drilling borewells with advanced technology and experienced professionals.</p>
                        <div className="social-links">
                            <a href="https://youtube.com" className="btn btn-youtube animated bounce">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="https://instagram.com" className="btn btn-instagram animated bounce">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://facebook.com" className="btn btn-facebook animated bounce">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                    </div>
                    {/* Quick Links Section is commented out */}
                    {/* <div className="col">
                        <h1 className="text-secondary">Q<span className="text-white">uick Link</span></h1>
                        <div className="links">
                            <a href="#">Services</a>
                            <a href="#">Our Values</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Get Started</a>
                        </div>
                    </div> */}
                    <div className="col">
                        {/* <h1 className="text-secondary">R<span className="text-white">esources</span></h1>
                        <div className="links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">FAQ</a>
                            <a href="contact.html">Support</a>
                        </div> */}
                    </div>
                    <div className="col">
                        <h1 className="text-secondary">C<span className="text-white">ontact us</span></h1>
                        <p className='description'>
                             RockdrillBorewells-Banglore
                        </p>
                        <p className='description'>Phone: +91 9060312355</p>
                        <p className='description'>Email: ellayaraja667@gmail.com</p>
                    </div>
                </div>
                <hr className="separator" />
                <div className="row">
                    <div className="col text-center">
                        <span>
                            <a href="#" className="text-secondary">
                                <i className="fas fa-copyright"></i> RockDrills
                            </a>, All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
