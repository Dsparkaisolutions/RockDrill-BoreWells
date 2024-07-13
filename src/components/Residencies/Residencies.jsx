import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import { sliderSettings } from '../../utils/common';
import data from '../../utils/slider.json';

const Residencies = () => {
    const areas = [
        "Electronic City",
        "Sarjapur Road",
        "Marathalli",
        "Kundalahalli",
        "Whitefield",
        "KR Puram",
        "Hoskote",
        "Hennur",
        "Nagwara",
        "Hegdenagar",
        "Yelahanka",
        "Hebbal",
        "Kasturi Nagar",
        "Banaswadi",
        "Old Madras Road",
        "Hosur Road",
        "HSR Layout",
        "Bannerghatta Road"
    ];

    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <div className="scroll-container">
                        <div className="scroll-text">
                            <span className='primaryText'>Areas we cover: </span>
                            {areas.map((area, index) => (
                                <span key={index}>{area}</span>
                            ))}
                        </div>
                    </div>
                    <span className='primaryText'>Popular Services</span>
                </div>
                
                <Swiper {...sliderSettings}>
                    <SliderButton />
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" /><br />
                                    <span className="secondaryText r-price">
                                        <span style={{color: 'orange'}}>₹</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies;

const SliderButton = () => {
    const swiper = useSwiper();

    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};
