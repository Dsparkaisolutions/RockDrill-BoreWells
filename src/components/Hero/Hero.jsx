import React from 'react';
import './Hero.css';
import { HiMail, HiPhone } from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className="paddings innerWidth hero-container flexCenter">

                {/* left-side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>
                            Explore<br />
                            More <span style={{ color: 'blue' }}>O</span>ptimal<br />
                            Machines
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span>Drilling can be done in 6 feet gap!</span>
                        <span>No need of space for the heavy Rig to enter into the narrow street,</span>
                        <span>Our robot will drill within a 200-meter radius of its master rig.</span>
                    </div>

                    {/* <div className="flexCenter search-bar">
                        <HiMail color="var(--blue)" size={25} /> 
                        <input type="text" />
                        <button className="button">Get details</button>
                    </div> */}

                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={10} end={100} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'> Premium Products</span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={50} end={115} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'> Qualified Staff</span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={100} end={1000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'> Happy Clients</span>
                        </div>
                    </div>
                </div>

                {/* right-side */}
                <div className="flexCenter hero-right">
                    <div className="contact-info" >
                        <HiPhone color="var(--blue)" size={25} /> 
                        <span>Rockdills Contact no: +91 9060312355</span>
                    </div>
                    <div className="image-container">
                        <img src="/rockhomebang.jpeg" alt="Drilling Rig" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
