import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/5rvyR5J/banner-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Wireless Keyboard</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Gpw23Qm/banner-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Headphone</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/WWSmxfb/banner-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Smart Watch</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;